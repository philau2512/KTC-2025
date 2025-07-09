import React, { useState, useEffect } from "react";

function SearchApp() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Bỏ qua tìm kiếm nếu query rỗng
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    // Đánh dấu đang tải
    setLoading(true);

    // Giả lập API call
    const timeoutId = setTimeout(() => {
      // Giả sử đây là kết quả từ API
      const mockResults = [
        `Kết quả 1 cho "${query}"`,
        `Kết quả 2 cho "${query}"`,
        `Kết quả 3 cho "${query}"`,
      ];
      setResults(mockResults);
      setLoading(false);
    }, 500);

    // Cleanup để tránh race condition
    return () => clearTimeout(timeoutId);
  }, [query]); // Chạy lại khi query thay đổi

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Nhập từ khóa tìm kiếm..."
      />

      {loading ? (
        <p>Đang tìm kiếm...</p>
      ) : (
        <ul>
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchApp;