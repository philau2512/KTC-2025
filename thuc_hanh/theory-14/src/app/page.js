import ArticleList from "@/components/main/articles/ArticleList";

export default async function page({ params }) {
  const { id } = await params;
  return <ArticleList articleId={id} />;
}