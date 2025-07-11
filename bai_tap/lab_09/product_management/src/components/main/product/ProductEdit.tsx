import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  updateProduct,
} from "../../../services/productService";
import type { Product } from "../../../types/Product.types";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Product>({
    id: "",
    name: "",
    price: null,
    category: "",
    brand: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const product = await getProductById(id);
        setFormData(product);
      } catch (error) {
        setError("Không thể tải sản phẩm. Lỗi: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? (value ? Number(value) : null) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) {
      alert("ID sản phẩm không hợp lệ");
      return;
    }

    setSaving(true);
    try {
      await updateProduct(id, formData);
      alert("Cập nhật sản phẩm thành công!");
      navigate("/");
    } catch (error) {
      alert("Lỗi khi cập nhật sản phẩm: " + error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h2>Chỉnh Sửa Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên Sản Phẩm:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Giá:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price === null ? "" : formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="category">Danh Mục:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="brand">Thương Hiệu:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit" disabled={saving}>
            {saving ? "Đang Lưu..." : "Cập Nhật Sản Phẩm"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{ marginLeft: "10px" }}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;