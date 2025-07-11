import axiosClient from "../api/axiosClient";
import type { Product } from "../types/Product.types";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axiosClient.get("/products");
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axiosClient.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (
  data: Omit<Product, "id"> // đối tượng Product không có id
): Promise<Product> => {
  const response = await axiosClient.post("/products", data);
  return response.data;
};

export const updateProduct = async (
  id: string,
  data: Partial<Product> // Partial cho phép update 1 phần của product
): Promise<Product> => {
  const response = await axiosClient.put(`/products/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await axiosClient.delete(`/products/${id}`);
};
