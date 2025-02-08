import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Onboarding } from "../pages/onboarding/Onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Onboarding /> }],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
