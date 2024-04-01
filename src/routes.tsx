import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PythonDetail from "./components/work/PythonDetail";
import GameHubDetail from "./components/product/GameHubDetail";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import AboutMe from "./pages/AboutMe";
import Product from "./pages/Product";
import DlearningDetail from "./components/DlearningDetail";
import CommunityDetail from "./components/product/CommunityDetail";

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
      { path: "product/community", element: <CommunityDetail /> },
      { path: "work/python", element: <PythonDetail /> },
      { path: "work/dlearning", element: <DlearningDetail /> },
    ],
  },
]);

export default router;
