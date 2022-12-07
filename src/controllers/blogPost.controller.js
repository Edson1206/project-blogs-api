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

const findBlogPostById = async (req, res) => {
  const { id } = req.params;
  const result = await blogPostService.findBlogPostById(id);
    if (!result) {
      return res.status(404).send({ message: 'Post does not exist' });
    }
  return res.status(200).json(result);
};

const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const { title, content } = req.body;
  const postFound = await blogPostService.findBlogPostById(Number(id));

  if (user.id !== postFound.userId) {
    return res
      .status(401)
      .json({ message: 'Unauthorized user' });
  }

  const updated = await blogPostService.updateBlogPost(title, content, postFound);

  return res.status(200).json(updated);
};

const deleteBlogPostById = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const postToDelete = await blogPostService.findBlogPostById(Number(id));
  if (!postToDelete) {
    return res
    .status(404)
    .json({ message: 'Post does not exist' });
  }

  if (user.id !== postToDelete.userId) {
    return res
      .status(401)
      .json({ message: 'Unauthorized user' });
  }

  await blogPostService.deleteBlogPostById(Number(id));

  res.status(204).json();
};

const searchBlogPosts = async (req, res) => {
  const { q } = req.query;
 
  const blogPosts = await blogPostService.searchBlogPosts(q);

  res.status(200).json(blogPosts);
};

module.exports = {
  createBlogPost,
  findAllBlogPosts,
  findBlogPostById,
  updateBlogPost,
  deleteBlogPostById,
  searchBlogPosts,
};