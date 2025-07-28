import React from "react";
import { create } from "zustand";

export const useArticleStore = create((set) => ({
  isModalOpen: false,
  modalType: "add", // add, edit
  selectedArticle: null,

  openModal: (type, article = null) =>
    set({ isModalOpen: true, modalType: type, selectedArticle: article }),

  closeModal: () => set({ isModalOpen: false, selectedArticle: null }),
}));
