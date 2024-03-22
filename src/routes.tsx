import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Me from "./pages/Me";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import HomePage from "./HomePage";
import Python from "./components/courses/Python";
import GameHubDetail from "./components/projects/GameHubDetail";
import Course from "./pages/Course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-me", element: <Me /> },
      { path: "projects", element: <Product /> },
      { path: "projects/gamehub", element: <GameHubDetail /> },
      { path: "courses", element: <Course /> },
      { path: "courses/python", element: <Python /> },
    ],
  },
]);

export default router;
