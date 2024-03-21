import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Me from "./pages/Me";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import HomePage from "./HomePage";
import CoursePython from "./pages/CoursePython";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "courses/python", element: <CoursePython /> },
      { path: "projects", element: <Product /> },
      { path: "about-me", element: <Me /> },
    ],
  },
]);

export default router;
