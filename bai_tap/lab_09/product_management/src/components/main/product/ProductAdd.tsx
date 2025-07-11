import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../services/productService";
import type { Product } from "../../../types/Product.types";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Omit<Product, "id">>({
    name: "",
    price: null,
    category: "",
    brand: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? (value ? Number(value) : null) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createProduct(formData);
      alert("Sản phẩm đã được tạo thành công!");
      navigate("/");
    } catch (error) {
      alert("Lỗi khi tạo sản phẩm: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Thêm Sản Phẩm Mới</h2>
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
          <button type="submit" disabled={loading}>
            {loading ? "Đang Xử Lý..." : "Thêm Sản Phẩm"}
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

export default ProductAdd;
