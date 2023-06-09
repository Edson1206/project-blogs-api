const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getAllCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};