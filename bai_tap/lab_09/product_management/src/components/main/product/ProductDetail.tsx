import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../../types/Product.types";
import { getProductById } from "../../../services/productService";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const data = await getProductById(id);
          setProduct(data);
        }
      } catch (error) {
        setError("Khong the tai san pham. Loi la: " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Dang tai du lieu...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!product) {
    return <p>Khong tim thay san pham</p>;
  }

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <ul>
        <li>
          <strong>ID:</strong> {product.id}
        </li>
        <li>
          <strong>Tên:</strong> {product.name}
        </li>
        <li>
          <strong>Giá:</strong> {product.price}
        </li>
        <li>
          <strong>Brand:</strong> {product.brand}
        </li>
        <li>
          <strong>Category:</strong> {product.category}
        </li>
      </ul>
      <button onClick={() => navigate("/")} className="btn-back">
        Quay về
      </button>
    </div>
  );
};

export default ProductDetail;
