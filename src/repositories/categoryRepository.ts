import Category from "../entities/Category";

export const getAllCategories = async () => {
  return await Category.findAll();
};

export const createCategory = async (data: any) => {
  return await Category.create(data);
};
// Update an existing category by ID
export const updateCategory = async (id: string, data: { name?: string }) => {
  return await Category.update(data, { where: { id }, returning: true });
};
