import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import GameHubDetail from "./components/projects/GameHubDetail";
import AI from "./pages/AI";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Me from "./pages/Me";
import Product from "./pages/Product";
import PythonDetail from "./components/courses/PythonDetail";

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
      { path: "ai", element: <AI /> },
    ],
  },
]);

export default router;
