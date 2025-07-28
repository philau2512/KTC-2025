"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArticleService } from "@/services/articleService";

export default function AddArticleForm() {
  const [article, setArticle] = useState({
    title: "",
    userId: "",
    content: "",
  });

  const router = useRouter();

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
      await ArticleService.addArticle({
        ...article,
        userId: Number(article.userId),
      });
      alert("Thêm mới bài viết thành công!");
      router.push("/bai-viet-2");
    } catch (error) {
      console.error("Lỗi khi thêm bài viết:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <h2>Thêm bài viết</h2>
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
      /><br/>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Thêm bài viết
      </button>
    </form>
  );
}
