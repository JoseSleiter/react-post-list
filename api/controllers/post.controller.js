const postService = require("./../services/post.service");

class Post {
  /**
   * show all post
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async index(req, res, next) {
    try {
      const resp = await postService.findAll();
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(500).json({ data: e.stack });
    }
  }

  /**
   * show a post by id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async show(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await postService.showById(id);
      if (!resp) {
        res.status(404).json({ data: [], message: "Not found post" });
      }
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(500).json({ data: e.stack });
    }
  }

  /**
   * search all post by title
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async search(req, res, next) {
    try {
      const { query } = req.params;
      if (query === "") res.status(404).json({ data: [] });

      const resp = await postService.findByTitleOrDescription(query);
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(500).json({ data: e.stack });
    }
  }

  /**
   * store a new post
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async store(req, res, next) {
    try {
      const data = req.body;
      const resp = await postService.store(data);
      res.status(201).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(500).json({ data: e.stack });
    }
  }

  /**
   * Update a post by id and new data
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const resp = await postService.update({ id, ...data });
      if (!resp) {
        res.status(404).json({ data: [], message: "Not found post" });
      }
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(500).json({ data: e.stack });
    }
  }

  /**
   * Delete a post by id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await postService.deleteById(id);
      if (!resp) {
        res.status(404).json({ data: [], message: "Not found post" });
      }
      res.status(204).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(500).json({ data: e.stack });
    }
  }
}
module.exports = new Post();
