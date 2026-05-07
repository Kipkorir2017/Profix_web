import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import SpareParts from "../pages/SpareParts";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/projects",
        element: <Projects />,
      },

      {
        path: "/spare-parts",
        element: <SpareParts />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;