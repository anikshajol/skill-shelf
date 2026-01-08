import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/skills", element: <Skills /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
