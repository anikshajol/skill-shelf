import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Loader from "../Components/Loader";
import SkillsDetails from "../Pages/SkillsDetails";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import SavedSkills from "../Pages/SavedSkills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/skills",
        element: <Skills />,
        loader: () => fetch("/skills.json"),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/skills/:id",
        element: (
          <PrivateRoute>
            <SkillsDetails />
          </PrivateRoute>
        ),
        loader: () => fetch(`/skills.json`),
        hydrateFallbackElement: <Loader />,
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/saved-skills",
        element: (
          <PrivateRoute>
            <SavedSkills />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
