import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserProfile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => () => {},
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    children: [],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/my-profile",
    element: <UserProfile />,
    children: [],
  },
]);

export { router };
