const { blogPostService } = require('../services');

const createBlogPost = async (req, res) => {
  const { status, message } = await blogPostService.createBlogPost(req);
  if (status === 400) return res.status(status).json({ message });
  
  res.status(status).json(message);
  };

const findAllBlogPosts = async (_req, res) => {
  const allBlogPosts = await blogPostService.findAllBlogPosts();

  return res.status(200).json(allBlogPosts);
};

module.exports = {
  createBlogPost,
  findAllBlogPosts,
};