const express = require("express");
const postContoller = require("./../controllers/post.controller");
const postRouter = express.Router();

postRouter
  .get("/", postContoller.index)
  .get("/:id", postContoller.show)
  .get("/search/:query", postContoller.search)
  .post("/", postContoller.store)
  .patch("/:id", postContoller.update)
  .delete("/:id", postContoller.delete);

module.exports = postRouter;
