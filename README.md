A tool to parse annotations of JS files using their JsDoc.

- [Install](#install)
- [Usage](#usage)
- [Example](#example)
- [Tests](#tests)
- [Contributing](#contributing)

# Install

`npm install --save files-jsdoc-annotator`

# Usage

- `genAll(config)` Generate annotation files for all source files in the provided output directory. It returns an object containing a function, `getFileAnnotations()`, that you can use to import the annotations file for any file you'd like using its relative path.

See the tests (`tests/annotator_test.js`) to see how these methods are used.

## config object

When creating the store, you must specify a configuration object.

### source: `String|glob`

The `source` is the path or glob to the file(s) you want to annotate. Only matching files that include the `@annotateJsdoc` will be annotated.

### outputDir: `String`

The directory in which to output the generated JS files. If this directory (or its ancestors) does not exist, it will be automatically created.

## Examples

Please see the examples folder for a working example. Also see the tests.

## Tests

We use mocha and chai. Run `npm test`

## Contributing

Feel free to open a pull request!
