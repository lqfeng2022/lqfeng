import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PythonDetail from "./components/work/PythonDetail";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import AboutMe from "./pages/AboutMe";
import Shape from "./pages/Shape";
import DlearningDetail from "./components/DlearningDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "shape", element: <Shape /> },
      { path: "work/python", element: <PythonDetail /> },
      { path: "work/dlearning", element: <DlearningDetail /> },
    ],
  },
]);

export default router;
