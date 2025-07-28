import {
  selectArticles,
  selectArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "@/app/api/articleApi";

export const ArticleService = {
  async getArticles() {
    try {
      const data = await selectArticles();
      return data;
    } catch (error) {
      console.error("Error getting articles:", error);
      throw error;
    }
  },

  async getArticleById(articleId) {
    try {
      const data = await selectArticleById(articleId);
      return data;
    } catch (error) {
      console.error("Error getting article by id:", error);
      throw error;
    }
  },

  async addArticle(data) {
    try {
      const result = await createArticle(data);
      return result;
    } catch (error) {
      console.error("Error creating article:", error);
      throw error;
    }
  },

  async editArticle(data) {
    try {
      const result = await updateArticle(data);
      return result;
    } catch (error) {
      console.error("Error updating article:", error);
      throw error;
    }
  },

  async removeArticle(id) {
    try {
      const result = await deleteArticle(id);
      return result;
    } catch (error) {
      console.error("Error deleting article:", error);
      throw error;
    }
  },
};
