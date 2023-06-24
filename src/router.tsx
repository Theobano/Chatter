import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth } from "./pages";
import { LogIn, Register } from "./pages/auth";
import { AuthPages } from "./pages/auth/AuthPages";
import { Home } from "./pages/home/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <AuthPages />,
        children: [
          {
            path: "",
            element: <LogIn />,
          },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
]);
