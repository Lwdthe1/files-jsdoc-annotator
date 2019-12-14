"use strict";

const fs = require("fs");
const path = require("path");

const mapFiles = require("map-files");
const beautifyJs = require("js-beautify").js;
const stringHash = require("string-hash");
const jsdoc = require("jsdoc-api");

const arrays = require("./utils/arrays");

function genAnnotationsFile({ file, outputDir }) {
  const { filename = file.basename, fileRootPath = getFileRootPath(file) } = "";

  let fileComments;
  if (file.content.includes("@annotateJsdoc")) {
    fileComments = jsdoc.explainSync({
      source: file.content,
      access: "all"
    });
  } else {
    // No annotations desired for this file
    return;
  }

  const allMap = {};
  const classMap = {};

  fileComments
    .map(blockComment => {
      if (!blockComment.params) {
        blockComment.params = [];
      }
      if (!blockComment.tags) {
        blockComment.tags = [];
      }

      if (blockComment.params.length) {
        blockComment.tags = blockComment.tags.concat(
          blockComment.params.map(param => {
            return {
              title: "param",
              originalTitle: "param",
              value: param,
              text: param.description
            };
          })
        );
      }

      if (blockComment.returns && blockComment.returns.length) {
        blockComment.tags = blockComment.tags.concat(
          blockComment.returns.map(returnAnnotation => {
            return {
              title: "returns",
              originalTitle: "returns",
              value: returnAnnotation,
              text: returnAnnotation.description
            };
          })
        );
      }

      if (blockComment.access) {
        blockComment.tags.push({
          title: blockComment.access,
          originalTitle: blockComment.access
        });
      }
      return blockComment;
    })
    .filter((blockComment, index) => {
      const { comment, tags, meta } = blockComment;
      if (
        index === 0 &&
        tags.some(({ title }) => {
          return title.toLowerCase() === "annotatejsdoc";
        })
      ) {
        return false;
      }
      return comment && meta && meta.code && !!tags.length;
    })
    .forEach(blockComment => {
      const tagsGrouped = arrays.groupByValueOf(
        blockComment.tags,
        "originalTitle"
      );
      const annotations = arrays.mapFirstsByValueOf(
        blockComment.tags,
        "originalTitle",
        (tag, key) => {
          const [first, ...rest] = tagsGrouped[tag[key]];
          tag.hasOthers = !!rest.length;
          if (rest.length) {
            tag.others = rest;
          }
          return tag;
        }
      );

      const blockMeta = blockComment.meta;
      const blockMetaCode = blockMeta.code;
      const blockName = blockComment.name;
      const memberOf =
        blockComment.memberof === undefined
          ? "<module>"
          : blockComment.memberof;

      const annotation = {
        all: annotations,
        codeBlockMeta: {
          name: blockName,
          type: blockMetaCode && blockMetaCode.type,
          memberOf
        }
      };
      allMap[blockName] = annotation;
    });

  Object.values(allMap).forEach(annotation => {
    const { name: blockName, type, memberOf } = annotation.codeBlockMeta;
    if (!memberOf.startsWith("<")) {
      if (!classMap[memberOf]) {
        classMap[memberOf] = {};
      }
      const container = classMap[memberOf];
      if (!container.method) {
        container.method = {};
      }
      if (!container.field) {
        container.field = {};
      }

      if (type.includes("Method") || type.includes("Function")) {
        container.method[blockName] = annotation;
      } else {
        container.field[blockName] = annotation;
      }
    }
  });

  const exportObj = {
    all: allMap,
    class: classMap,
    fileRootPath
  };

  const exportFile = `
		'use strict'

		/**
		 * @generated
		 * @fileoverview Annotations for file.
		 * @filename ${filename}
		 * @fileRootPath ${fileRootPath}
		 */


		module.exports = ${JSON.stringify(exportObj)}
	`;

  maybeCreateFileAnnotationsFileDir(outputDir);
  fs.writeFileSync(
    getFileAnnotationsFilePath(fileRootPath, outputDir, true),
    beautifyJs(exportFile, { max_preserve_newlines: 2, wrap_line_length: 100 })
  );

  return exportObj;
}

function getFileRootPath(file) {
  return file.path;
}

function getFileHash(fileRootPath) {
  return stringHash(fileRootPath);
}

function maybeCreateFileAnnotationsFileDir(outputDir) {
  const outputDirParts = outputDir.split("/");
  outputDirParts.forEach((_part, currentpartIndex) => {
    const partialPath = outputDirParts
      .filter((_part, partIndex) => {
        return partIndex <= currentpartIndex;
      })
      .join("/");
    const dir = path.join(__dirname, partialPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
}

function getFileAnnotationsFilePath(filePath, outputDir, isRootPath) {
  if (!isRootPath) {
    filePath = path.join(__dirname, filePath);
  }

  return path.join(
    __dirname,
    outputDir,
    `/gen.annotations.${getFileHash(filePath)}.js`
  );
}

function getFileDisplayPath(file) {
  // Absolute path
  return file.history[0].replace(file.base, "");
}

const actions = {
  /**
   * 
   * @param {{
      source: String,
      outputDir: String
   * }} config 
   */
  genAll: function({ source, outputDir }) {
    if (!source) {
      throw new Error("Must provide source glob");
    } else if (!outputDir) {
      throw new Error("Must provide outputDir directory");
    }

    mapFiles(source, {
      renameKey: file => {
        actions.gen({
          file,
          outputDir
        });
      }
    });

    return {
      source,
      /**
       * @param {String} fileRelativePath
       */
      getFileAnnotations: fileRelativePath => {
        return require(getFileAnnotationsFilePath(fileRelativePath, outputDir));
      }
    };
  },
  /**
   * 
   * @param {{
    file: File,
    outputDir: String
   * }} config 
   */
  gen: function({ file, outputDir }) {
    try {
      return genAnnotationsFile({ file, outputDir });
    } catch (err) {
      err = new Error(
        `Error in file during annotation attempt: ${getFileDisplayPath(
          file
        )} ${err}`
      );

      throw err;
    }
  }
};

module.exports = actions;
