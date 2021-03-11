const Post = require("./../models").post;
const { normalizeObj } = require("../utils/functions");

class postService {
  async findAll() {
    const posts = await Post.findAll();
    return {
      posts: normalizeObj(posts),
    };
  }

  async showById(id) {
    if (!id) {
      throw Error("Debe ingresar el id del post");
    }
    const post = await Post.findByPk(id);
    if (!post) {
      return;
    }
    return {
      post: normalizeObj(post),
    };
  }

  async findByTitleOrDescription(query) {
    const Op = require("sequelize").Op;
    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: "%" + query + "%" } },
          { description: { [Op.like]: "%" + query + "%" } },
        ],
      },
    });
    return {
      posts: normalizeObj(posts),
    };
  }

  async store(data) {
    if (!data.title || !data.description) {
      throw Error("Hace falta el dato title o description");
    }
    // data.description = escape(data.description);
    const post = await Post.create({ ...data });
    return {
      post: normalizeObj(post),
    };
  }

  async update({ id, ...data }) {
    if (!id) {
      throw Error("Hace falta el id del post");
    }
    const post = await Post.findByPk(id);
    if (!post) {
      return;
    }
    const newPost = await post.update(data);
    return {
      post: normalizeObj(newPost),
    };
  }

  async deleteById(id) {
    const post = await Post.destroy({ where: { id } });
    if (!post) {
      return;
    }
    return {
      delete: true,
    };
  }
}

module.exports = new postService();
