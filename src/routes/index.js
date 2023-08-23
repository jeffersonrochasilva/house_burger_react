// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

import Hamburger from "../pages/Private/Hamburger";
import Combos from "../pages/Private/Combos";
import Drinks from "../pages/Private/Drinks";
import Meals from "../pages/Private/Meals";
import Promotions from "../pages/Private/Promotions";
import Refrigerator from "../pages/Private/Refrigerator";
import Shop from "../pages/Private/Shop";

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
    ],
  },
]);

export default router;
