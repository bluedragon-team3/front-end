import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Onboarding } from "../pages/onboarding/Onboarding";
import { Home } from "../pages/home/Home";
import { Signup } from "../pages/signup/Signup";
import { Login } from "../pages/login/login";
import { MyPage } from "../pages/myPage/MyPage";
import { ClosedCrew } from "../pages/closedCrew/ClosedCrew";
import { OpenedCrew } from "../pages/openedCrew/OpenedCrew";
import { CrewDetail } from "../pages/myPage/crewDetail/CrewDetail";
import { Create } from "../pages/create/Create";
import { Apply } from "../pages/openedCrew/apply/Apply";
import { Detail } from "../pages/detail/Detail";
import { Member } from "../pages/myPage/crewDetail/member/Member";
import { WriteReview } from "../pages/myPage/crewDetail/writeReview/WriteReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Onboarding />,
      },

      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "home",
        element: <Home />,
      },

      {
        path: "create",
        element: <Create />,
      },

      {
        path: "closed-crew",
        element: <ClosedCrew />,
      },
      {
        path: "closed-crew/detail",
        element: <Detail />,
      },

      {
        path: "opened-crew",
        element: <OpenedCrew />,
      },
      {
        path: "opened-crew/apply",
        element: <Apply />,
      },

      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "mypage/crewdetail",
        element: <CrewDetail />,
      },
      {
        path: "mypage/crewdetail/member",
        element: <Member />,
      },
      {
        path: "mypage/crewdetail/write-review",
        element: <WriteReview />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
