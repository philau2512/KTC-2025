"use client";

import { ArticleService } from "@/services/articleService";
import { useRouter } from "next/navigation";

export default function ArticleTable({ articles }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa?");
    if (!confirm) return;

    try {
      await ArticleService.removeArticle(id);
      // Optional: Refresh or re-fetch list
      router.refresh?.(); // or setState to get list again
    } catch (error) {
      console.error("Xóa thất bại:", error);
    }
  };


  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>UserID</th>
          <th>
            <button
              onClick={() => router.push(`/articles/add`)}
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
                  onClick={() => router.push(`/articles/edit/${article.id}`)}
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
  );
}
