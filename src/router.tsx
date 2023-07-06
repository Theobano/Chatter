import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth } from "./pages";
import { LogIn, Register } from "./pages/auth";
import { AuthPages } from "./pages/auth/AuthPages";
import { Home } from "./pages/home/Home";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Feed, PrivateRouteWrapper } from "./pages/private";

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
  {
    element: <PrivateRouteWrapper isWriter={true} />,
    children: [
      {
        path: "/feed",
        element: <Feed />,
      },
    ],
  }
]);
