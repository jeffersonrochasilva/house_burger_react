// Private Pages
import UserInitial from "../pages/private/UserInitial";

// Public Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

import ItemSelectionArea from "../pages/public/ItemSelectionArea";
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
        path: "itemselectionarea",
        element: <ItemSelectionArea />,
      },
      {
        path: "selectItem",
        element: <SelectItem />,
      },
    ],
  },
  {
    path: "userInitial",
    element: <UserInitial />,
  },
]);

export default router;
