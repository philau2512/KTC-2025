import AboutPage from "../components/AboutPage";
import MenClothes from "../components/MenClothes";
import WomenClothes from "../components/WomenClothes";
import ProductsPage from "../components/ProductsPage";
import ContactPage from "../components/ContactPage";
import HomePage from "../components/HomePage";
import { Route, Routes } from "react-router-dom";

const paths = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  {
    path: "/products",
    element: <ProductsPage />,
    children: [
      { path: "women", element: <WomenClothes /> },
      { path: "men", element: <MenClothes /> },
    ],
  },
  { path: "/contact", element: <ContactPage /> },
];

function AppRouter02() {
  const renderRoutes = (routes: any[]) => {
    return routes.map(({ path, element, children }, index) => (
      <Route key={index} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));
  };

  return <Routes>{renderRoutes(paths)}</Routes>;
}

export default AppRouter02;
