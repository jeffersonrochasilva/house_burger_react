// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

import Hamburger from "../pages/public/Hamburger";
import Combos from "../pages/public/Combos";
import Drinks from "../pages/public/Drinks";
import Meals from "../pages/public/Meals";
import Promotions from "../pages/public/Promotions";
import Refrigerator from "../pages/public/Refrigerator";
import Shop from "../pages/public/Shop";
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
        path: "combos",
        element: <Combos />,
      },
      {
        path: "drinks",
        element: <Drinks />,
      },
      {
        path: "meals",
        element: <Meals />,
      },
      {
        path: "promotions",
        element: <Promotions />,
      },
      {
        path: "refrigerator",
        element: <Refrigerator />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "selectItem",
        element: <SelectItem />,
      },
    ],
  },
]);

export default router;
