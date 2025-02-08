import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Onboarding } from "../pages/onboarding/Onboarding";
import { Home } from "../pages/home/Home";
import { Signup } from "../pages/signup/Signup";
import { Login } from "../pages/login/login";
import { CrewDetail } from "../pages/mypage/crewdetail/CrewDetail";
import { Review } from "../pages/mypage/crewdetail/review/Review";
import { Create } from "../pages/create/Create";
import { Apply } from "../pages/openedCrew/apply/Apply";

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
      { path: "review", element: <Review />},
      { path: "create", element: <Create />},

      //바꿔야할 라우트
      { path: "crewdetail", element: <CrewDetail />},
      { path: "apply", element: <Apply />},

    ],

  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
