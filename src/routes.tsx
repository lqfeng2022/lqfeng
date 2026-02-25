import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Project from "./pages/Project";
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
      { path: "work/david", element: <David/> }, 
      { path: "work/xiao", element: <Xiao/> },
      { path: "work/xiaozhu", element: <Xiaozhu/> },
      { path: "work/lee", element: <Lee/> },
      { path: "work/tony", element: <Tony/> },
      { path: "work/luna", element: <Luna/> },
      { path: "work/megan", element: <Megan/> },
      { path: "work/sae", element: <Sae/> },
      { 
        path: "product/", 
        children: [
          { index: true, element: <Project/> },
          { path: "clipwords-django", element: <ClipwordsDjango/> },
          { path: "clipwords-react", element: <ClipwordsReact/> },
          { path: "clipwords-node", element: <ClipwordsNode/> },
          { path: "game-hub", element: <GameHub/> },
          { path: "blog-hub", element: <BlogHub/> },
          { path: "simonfy", element: <Simonfy/> },
        ]
       },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
