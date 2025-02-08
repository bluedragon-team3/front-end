import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Onboarding } from "../pages/onboarding/Onboarding";
import { Signup } from "../pages/signup/Signup";
import { CrewDetail } from "../pages/mypage/crewdetail/CrewDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Onboarding /> },
      { path: "signup", element: <Signup /> },
      { path: "crewdetail", element: <CrewDetail />},
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
