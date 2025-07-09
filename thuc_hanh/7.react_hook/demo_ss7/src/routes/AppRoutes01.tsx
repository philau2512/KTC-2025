import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import WomenClothes from "../components/WomenClothes";
import MenClothes from "../components/MenClothes";
import ProductsPage from "../components/ProductsPage";
import ContactPage from "../components/ContactPage";

function AppRoutes01() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />}>
        <Route path="women" element={<WomenClothes />} />
        <Route path="men" element={<MenClothes />} />
      </Route>
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default AppRoutes01;
