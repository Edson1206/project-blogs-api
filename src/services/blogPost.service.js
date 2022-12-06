const { Category, BlogPost, PostCategory, User } = require('../models');

const createBlogPost = async (req) => {
  const { title, content, categoryIds } = req.body;
  const data = req.user;
 
  if (!title || !content || !categoryIds) {
    return { status: 400, message: 'Some required fields are missing' };
  }

  const findCategories = await Category.findAll();
  const checkCategoryIds = categoryIds.every((id, i) => findCategories[i].id === id);

  if (!checkCategoryIds) {
    return { status: 400, message: 'one or more "categoryIds" not found' };
  }

  const result = await BlogPost.create({ title, content, userId: data.id });
  await Promise.all(
    categoryIds.map(async (categoryId) => PostCategory.create(
      { postId: result.id, categoryId },
    )),
  );
  return { status: 201, message: result };
};

const findAllBlogPosts = async () => {
  const allBlogPosts = await BlogPost.findAll({
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    },
    {
      model: Category, as: 'categories', through: { attributes: [] },
    },
  ],
  });

  return allBlogPosts;
};

const findBlogPostById = async (id) => BlogPost.findByPk(id, {
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
});

module.exports = {
  createBlogPost,
  findAllBlogPosts,
  findBlogPostById,
};