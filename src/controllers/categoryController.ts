import { Request, Response } from "express";
import {
  listCategories,
  addCategory,
  updateExistingCategory,
} from "../usecases/categoryUseCase";
import { formatResponse } from "../utils/response";
import { STATUS_CODES } from "../utils/statusCodes";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const data = await listCategories();
    res
      .status(STATUS_CODES.OK)
      .json(formatResponse(data, null, "Get Data Succesfuly", STATUS_CODES.OK));
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json(
        formatResponse(
          null,
          null,
          error.message,
          STATUS_CODES.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const data = await addCategory(req.body);
    res
      .status(STATUS_CODES.CREATED)
      .json(
        formatResponse(data, null, "Category created", STATUS_CODES.CREATED)
      );
  } catch (error) {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .json(
        formatResponse(null, null, error.message, STATUS_CODES.BAD_REQUEST)
      );
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  try {
    const updatedCategory = await updateExistingCategory(id, { name });
    res
      .status(STATUS_CODES.OK)
      .json(
        formatResponse(
          updatedCategory,
          null,
          "Category updated successfully",
          STATUS_CODES.OK
        )
      );
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json(
        formatResponse(
          null,
          error.message,
          "Failed to update category",
          STATUS_CODES.INTERNAL_SERVER_ERROR
        )
      );
  }
};
