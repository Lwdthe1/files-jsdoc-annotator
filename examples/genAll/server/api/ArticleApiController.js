"use strict";

/**
 * @fileoverview Example HTTP REST API server controller for articles
 * @annotateJsdoc
 */

/**
 * @helper
 */
function getConfig() {}

class ArticleApiController {
  constructor() {
    /**
     * @helper
     */
    const getUtils = () => {};

    /**
     * @duplicateFunction This should be ignored by the parser in favor of the member method
     */
    this.createArticle = () => {};

    /**
     * @duplicateFunction This should also be ignored by the parser in favor of the member method
     */
    this.aPrivateMethod = function() {};

    /**
     * @helper
     */
    this.getC = function() {};

    /**
     * @helper
     */
    this.getD = () => {};

    /**
     * @avar string
     */
    const aVar = "hello";

    /**
     * @avar int This should also be ignored by the parser in favor of the member method
     */
    this._anotherPrivateMethod = 8;

    /**
     * @avar object
     */
    this._privateVar = { a: 1 };
  }

  /**
   * @setter cool setter. Unfortunately, the parser currently only recognizes the last of the same variable
   * that it encounters in the entire file.
   * So, this field will be ignored by the parser in favor of the getter below it.
   */
  set aField(x) {}

  /**
   * @getter cool getter
   */
  get aField() {}

  /**
   * @apiType POST
   * @apiPath /api/i/article
   * @apiBody {"title": "String", "subtitle":"String", "content": "String"}
   * @apiKey Create Article
   * @apiDescription Create a new article
   * @apiResponse Article object
   */
  createArticle(req, res, next) {
    // 1. Insert the new article into db
    const newDbArticle = this.articleDbDriver.insert(req.body);
    // 2. Respond with the new article
    res.status(201).send(newDbArticle);
  }

  /**
   * @param req {HttpRequest} The http request object
   * @param res {HttpResponse} The http response object
   * @param next {Function}
   * @returns {Promise<HttpResponse>} cool stuff man
   */
  getArticle(req, res, next) {
    return new Promise((resolve, reject) => {
      // 1. Insert the user into db
      const dbArticle = this.articleDbDriver.getById(req.params.id);
      // 2. Respond with the article
      return res.status(200).send(dbArticle);
    });
  }

  /**
   * @private this is private
   */
  aPrivateMethod() {}

  /**
   * @private
   */
  _anotherPrivateMethod() {}

  /**
   * @protected this is private
   */
  aProtectedMethod() {}

  someOtherMethod() {}
}

module.exports = ArticleApiController;
