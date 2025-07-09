// import Counter01 from "./components/Counter01.js";
// import Counter02 from "./components/Counter02.tsx";
// import MyShop from "./components/MyShop.tsx";
// import MyShop03 from "./components/MyShop03.tsx";
// import MyShop04 from "./components/MyShop04.tsx";
// import MyShop05 from "./components/MyShop05.tsx";

// import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";

import { BrowserRouter, Link } from "react-router-dom";
import CartContext from "./components/CartContext";

// import AppRoutes01 from "./routes/AppRoutes01";
import AppRouter02 from "./routes/AppRouter02";

function App() {
  // Tạo dữ liệu cho CartContext
  const cartInfo = {
    userId: 1,
    cardId: 1,
    username: "Tèo",
  };
  return (
    <>
      {/* <Counter01 /> */}
      {/* <Counter02 /> */}
      {/* <MyShop /> */}
      {/* <MyShop03 /> */}
      {/* <MyShop04 /> */}
      {/* <MyShop05 /> */}
      {/* <Timer /> */}
      {/* <Counter /> */}

      <BrowserRouter>
        <CartContext.Provider value={cartInfo}>
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
              <ul>
                <li>
                  <Link to="/products/women">Women</Link>
                </li>
                <li>
                  <Link to="/products/men">Men</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <AppRouter02 />
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
