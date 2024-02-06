import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/notes"),
  },
  {
    path: "/login",
    lazy: () => import("./pages/login"),
  },
  {
    path: "/signup",
    lazy: () => import("./pages/signup"),
  },
]);

export default router;
