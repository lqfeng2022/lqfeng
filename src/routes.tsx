import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import David from "./pages/work/David";
import Xiao from "./pages/work/Xiao";
import Xiaozhu from "./pages/work/Xiaozhu";
import Lee from "./pages/work/Lee";
import Tony from "./pages/work/Tony";
import Luna from "./pages/work/Luna";
import Megan from "./pages/work/Megan";
import Sae from "./pages/work/Sae";
import ClipwordsDjango from "./pages/product/ClipwordsDjango";
import ClipwordsReact from "./pages/product/ClipwordsReact";
import ClipwordsNode from "./pages/product/ClipwordsNode";
import GameHub from "./pages/product/GameHub";
import BlogHub from "./pages/product/BlogHub";
import Simonfy from "./pages/product/Simonfy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { 
        path: "work/", 
        children: [
          { index: true, element: <HomePage/> },
          { path: "david", element: <David/> }, 
          { path: "xiao", element: <Xiao/> },
          { path: "xiaozhu", element: <Xiaozhu/> },
          { path: "lee", element: <Lee/> },
          { path: "tony", element: <Tony/> },
          { path: "luna", element: <Luna/> },
          { path: "megan", element: <Megan/> },
          { path: "sae", element: <Sae/> },
        ]
       }, 
      { 
        path: "product/", 
        children: [
          { index: true, element: <ProductPage/> },
          { path: "clipwords-django", element: <ClipwordsDjango/> },
          { path: "clipwords-react", element: <ClipwordsReact/> },
          { path: "clipwords-node", element: <ClipwordsNode/> },
          { path: "game-hub", element: <GameHub/> },
          { path: "blog-hub", element: <BlogHub/> },
          { path: "simonfy", element: <Simonfy/> },
        ]
       },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
