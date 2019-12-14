"use strict";

const express = require("express");
const annotator = require("../../index");
const app = express();

const PORT = process.env.PORT;
app.set("port", PORT || 3100);

// Generate the annotations for all server files
global.getFileAnnotations = annotator.genAll({
  source: "server/**/*.js",
  outputDir: "../annotations/gen/server"
}).getFileAnnotations;

app.get("/articlesApiAnnotations", (req, res) => {
  res.send(getFileAnnotations("./server/api/ArticleApiController"));
});

// Listen for incoming HTTP requests.
app.listen(PORT);
