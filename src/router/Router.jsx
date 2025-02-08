import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Onboarding } from "../pages/onboarding/Onboarding";
import { Home } from "../pages/home/Home";
import { Signup } from "../pages/signup/Signup";
import { Login } from "../pages/login/login";
import { Signup } from "../pages/signup/Signup";
import { CrewDetail } from "../pages/mypage/crewdetail/CrewDetail";
import { Review } from "../pages/mypage/crewdetail/review/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Onboarding /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> }, 
       { path: "signup", element: <Signup /> },
      { path: "crewdetail", element: <CrewDetail />},
      { path: "review", element: <Review />},
    ],

  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
