import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../../types/Product.types";
import axiosClient from "../../../api/axiosClient";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosClient.get("/products");
      setProducts(response.data);
    } catch (error) {
      alert("Loi khi lay du lieu: " + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axiosClient.delete(`/products/${id}`);
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        alert("Loi khi xoa san pham: " + error);
      }
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={() => navigate("/products/add")}>Them san pham</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    onClick={() => navigate(`/products/${product.id}`)}
                    style={{
                      backgroundColor: "#3498db",
                      color: "#fff",
                      marginRight: 8,
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/products/${product.id}/edit`)}
                    style={{
                      backgroundColor: "#f1c40f",
                      color: "#000",
                      marginRight: 8,
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{ backgroundColor: "#e74c3c", color: "#fff" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <table>
        <thead></thead>
      </table>
    </div>
  );
};

export default ProductList;
