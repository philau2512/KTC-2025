"use client";

import { useState, useEffect } from "react";
import { useArticleStore } from "@/store/zustand/articleStore";
import {
  useCreateArticleMutation,
  useUpdateArticleMutation,
} from "@/features/articles/articleApiSlice";

export default function ArticleModal() {
  const { isModalOpen, modalType, selectedArticle, closeModal } =
    useArticleStore();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    userId: "",
  });

  const [createArticle] = useCreateArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();

  useEffect(() => {
    if (modalType === "edit" && selectedArticle) {
      setFormData({
        title: selectedArticle.title,
        content: selectedArticle.content,
        userId: selectedArticle.userId,
      });
    } else {
      setFormData({
        title: "",
        content: "",
        userId: "",
      });
    }
  }, [modalType, selectedArticle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalType === "add") {
        await createArticle({
          ...formData,
          userId: Number(formData.userId),
        }).unwrap();
      } else {
        await updateArticle({
          id: selectedArticle.id,
          ...formData,
          userId: Number(formData.userId),
        }).unwrap();
      }
      closeModal();
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded w-96 space-y-3"
      >
        <h2 className="text-lg font-bold">
          {modalType === "add" ? "Thêm bài viết" : "Cập nhật bài viết"}
        </h2>
        <input
          name="title"
          placeholder="Tiêu đề"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <br />
        <input
          name="userId"
          placeholder="User ID"
          type="number"
          value={formData.userId}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <br />
        <textarea
          name="content"
          placeholder="Nội dung"
          value={formData.content}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <div className="flex justify-between pt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            {modalType === "add" ? "Thêm" : "Cập nhật"}
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="text-gray-600 underline"
          >
            Đóng
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}
