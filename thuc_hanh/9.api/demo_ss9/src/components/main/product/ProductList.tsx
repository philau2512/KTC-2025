import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../../types/Product.types";
import {
  deleteProduct,
  getAllProducts,
} from "../../../services/productServices";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      setError("Khong the tai san pham. Loi la: " + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Ban co chac chan muon xoa san pham nay?")) {
      try {
        await deleteProduct(id);
        alert("Xoa san pham thanh cong");
        fetchProducts();
      } catch (error) {
        alert("Loi khi xoa san pham: " + error);
      }
    }
  };

  return (
    <div>
      <h2>Danh sach san pham</h2>

      <button onClick={() => navigate("/products/add")}>Them san pham</button>
      {loading ? (
        <p>Dang tai du lieu...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table border={1} cellPadding={8} style={{ marginTop: 16 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ten san pham</th>
              <th>Gia</th>
              <th>Mo ta</th>
              <th>So luong</th>
              <th>Hinh anh</th>
              <th>Hanh dong</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    height={100}
                    width={100}
                  />
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/products/${product.id}`)}
                    style={{
                      backgroundColor: "#3498db",
                      color: "#fff",
                      marginRight: 8,
                    }}
                  >
                    Xem
                  </button>
                  <button
                    onClick={() => navigate(`/products/${product.id}/edit`)}
                    style={{
                      backgroundColor: "#f1c40f",
                      color: "#000",
                      marginRight: 8,
                    }}
                  >
                    Sua
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{ backgroundColor: "#e74c3c", color: "#fff" }}
                  >
                    Xoa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
