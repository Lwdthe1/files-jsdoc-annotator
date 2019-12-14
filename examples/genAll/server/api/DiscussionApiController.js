"use strict";

/**
 * @fileoverview Example HTTP REST API server controller for discussions
 * @annotateJsdoc
 */

const DiscussionApiController = {
  discussionDbDriver: {
    insert: () => {},
    getById: () => {},
    updateById: () => {},
    deleteById: () => {}
  },
  /**
   * @apiType POST
   * @apiPath /api/i/discussion
   * @apiBody {"title": "String", "subtitle":"String", "content": "String"}
   * @apiKey Create Discussion
   * @apiDescription Create a new discussion
   * @apiResponse Discussion object
   */
  createDiscussion(req, res, next) {
    // 1. Insert the new discussion into db
    const newDbDiscussion = this.discussionDbDriver.insert(req.body);
    // 2. Respond with the new discussion
    res.status(201).send(newDbDiscussion);
  }
};
module.exports = DiscussionApiController;
