import ArticleTable from "@/components/main/articles/ArticleTable";
import { ArticleService } from "@/services/articleService";

// Static rendering with ISR (using axios-based service layer)
export default async function page() {
  const articles = await ArticleService.getArticles();

  return (
    <div>
      <h1>Blog</h1>
      <ArticleTable articles={articles} />
    </div>
  );
}
