import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./Homepage";
import Me from "./pages/Me";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product", element: <Product /> },
      { path: "about-me", element: <Me /> },
    ],
  },
]);

export default router;
