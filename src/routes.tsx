import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PythonDetail from "./components/work/PythonDetail";
import GameHubDetail from "./components/product/GameHubDetail";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import AboutMe from "./pages/AboutMe";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "product", element: <Product /> },
      { path: "product/gamehub", element: <GameHubDetail /> },
      { path: "work/python", element: <PythonDetail /> },
    ],
  },
]);

export default router;
