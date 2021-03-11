// const authMiddle = require("./../middleware/authJWT");
const postRouter = require("./post.route");

function initRoutes(app) {
  app.use("/api/v1/post", postRouter);
}
module.exports = initRoutes;
