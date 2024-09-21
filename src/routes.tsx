import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Shape from "./pages/Shape";
import Project from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shape", element: <Shape /> },
      { path: "product", element: <Project /> },
    ],
  },
]);

export default router;
