"use client";
import { useState } from "react";
import { ArticleService } from "@/services/articleService";

export default function ArticleForm({ onSuccess }) {
  const [form, setForm] = useState({ title: "", userId: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ArticleService.createArticle(form);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 mr-2"
      />
      <input
        name="userId"
        value={form.userId}
        onChange={handleChange}
        placeholder="User ID"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Thêm bài viết
      </button>
    </form>
  );
}
