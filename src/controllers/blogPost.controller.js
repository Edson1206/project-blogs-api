const { blogPostService } = require('../services');

const createBlogPost = async (req, res) => {
  const { status, message } = await blogPostService.createBlogPost(req);
  if (status === 400) return res.status(status).json({ message });
  
  res.status(status).json(message);
  };

module.exports = {
  createBlogPost,
};