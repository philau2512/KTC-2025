"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArticleService } from "@/services/articleService";

export default function EditArticleForm() {
  const router = useRouter();
  const { articleId } = useParams();
  const [article, setArticle] = useState({
    title: "",
    userId: "",
    content: "",
  });

  // Get article by ID when component mount
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await ArticleService.getArticleById(articleId);
        setArticle({
          title: data.title || "",
          userId: data.userId?.toString() || "",
          content: data.content || "",
        });
      } catch (error) {
        console.error("Lỗi khi load bài viết:", error);
      }
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ArticleService.editArticle({
        articleId,
        ...article,
        userId: article.userId,
      });
      alert("Cập nhật bài viết thành công!");
      router.push("/bai-viet-2");
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <h2>Cập nhật bài viết</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={article.title}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <br />
      <input
        type="number"
        name="userId"
        placeholder="User ID"
        value={article.userId}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <br />
      <textarea
        name="content"
        placeholder="Content"
        value={article.content}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        rows={4}
        required
      />
      <br />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Cập nhật
      </button>
    </form>
  );
}
