import {
  getAllCategories,
  createCategory,
  updateCategory,
} from "../repositories/categoryRepository";

export const listCategories = async () => {
  return await getAllCategories();
};

export const addCategory = async (data: any) => {
  return await createCategory(data);
};
// Update an existing category
export const updateExistingCategory = async (
  id: string,
  data: { name?: string }
) => {
  if (!id) {
    throw new Error("Category ID is required");
  }
  const [rowsUpdated, [updatedCategory]] = await updateCategory(
    id,
    data
  );
  if (rowsUpdated === 0) {
    throw new Error("Category not found");
  }
  return updatedCategory;
};