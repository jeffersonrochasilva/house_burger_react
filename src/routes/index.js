// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

import Hamburger from "../pages/public/Hamburger";
import Promotions from "../pages/public/Promotions";
import SelectItem from "../pages/public/SelectItem";

// Sub pages

import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "hamburger",
        element: <Hamburger />,
      },

      {
        path: "promotions",
        element: <Promotions />,
      },

      {
        path: "selectItem",
        element: <SelectItem />,
      },
    ],
  },
]);

export default router;
