import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PythonDetail from "./components/courses/PythonDetail";
import GameHubDetail from "./components/projects/GameHubDetail";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Me from "./pages/Me";
import Product from "./pages/Product";

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
      { path: "courses/python", element: <PythonDetail /> },
    ],
  },
]);

export default router;
