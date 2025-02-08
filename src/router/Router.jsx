import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Onboarding } from "../pages/onboarding/Onboarding";
import { Home } from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Onboarding /> },
      { path: "home", element: <Home /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
