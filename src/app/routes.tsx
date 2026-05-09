import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Membership } from "./pages/membership";
import { Programs } from "./pages/programs";
import { Transformations } from "./pages/transformations";
import { Trainers } from "./pages/trainers";
import { Store } from "./pages/store";
import { Contact } from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "membership", Component: Membership },
      { path: "programs", Component: Programs },
      { path: "transformations", Component: Transformations },
      { path: "trainers", Component: Trainers },
      { path: "store", Component: Store },
      { path: "contact", Component: Contact },
    ],
  },
]);
