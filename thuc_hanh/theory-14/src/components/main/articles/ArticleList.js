"use client";

import React from "react";
import {
  useGetArticlesQuery,
  useDeleteArticleMutation,
} from "@/features/articles/articleApiSlice";
import { useRouter } from "next/navigation";
import ArticleModal from "./ArticleModal";
import { useArticleStore } from "@/store/zustand/articleStore";

export default function ArticleList() {
  const router = useRouter();
  const { data: articles, isLoading, error } = useGetArticlesQuery();
  const [deleteArticle] = useDeleteArticleMutation();
  const { openModal } = useArticleStore();

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa?")) return;
    try {
      await deleteArticle(id).unwrap();
      router.refresh?.();
    } catch (error) {
      console.error("Lỗi khi xóa:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* Article Add/Edit Modal Form */}
      <ArticleModal />
      <table border="1" cellPadding="8" className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>UserID</th>
            <th>
              <button
                onClick={() => openModal("add")}
                className="text-blue-500 underline"
              >
                Thêm
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {articles?.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.userId}</td>
              <td>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => router.push(`/articles/${article.id}`)}
                    className="text-blue-500 underline"
                  >
                    Xem
                  </button>
                  <button
                    onClick={() => openModal("edit", article)}
                    className="text-green-500 underline"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="text-red-500 underline"
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
