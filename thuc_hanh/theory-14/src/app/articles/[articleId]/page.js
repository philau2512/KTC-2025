import { ArticleService } from "@/services/articleService";

export default async function ArticleDetailPage({ params }) {
  const { articleId } = params;
    console.log(articleId);
  const article = await ArticleService.getArticleById(articleId);

  if (!article) {
    return <div>Không tìm thấy bài viết.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Chi tiết bài viết</h1>
      <p>
        <strong>ID:</strong> {article.id}
      </p>
      <p>
        <strong>Tiêu đề:</strong> {article.title}
      </p>
      <p>
        <strong>User ID:</strong> {article.userId}
      </p>
    </div>
  );
}
