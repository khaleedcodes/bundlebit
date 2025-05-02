import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import PageLayout from "./pages/PageLayout";
import "./styles/index.css";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
// import Khaleed from "./pages/user-pages/khaleed/Khaleed";
// import DammyIsaac from "./pages/user-pages/dammy-isaac/DammyIsaac";
// import Solex from "./pages/user-pages/solex/Solex";
// import PrettyJhaine from "./pages/user-pages/pretty-jhaine/PrettyJhaine";
// import Nairaupdatesng from "./pages/user-pages/nairaupdatesng/Nairaupdatesng";
// import Nimor from "./pages/user-pages/nimor/Nimor";
// import Bundleup from "./pages/user-pages/bundleup/Nimor";
import "./styles/card-animation.css";
import Dashboard from "./pages/dashboard-page/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <LandingPage />
      </PageLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/b/login",
    element: <LoginPage />,
  },
  {
    path: "/b/signup",
    element: <SignupPage />,
  },
  {
    path: "b/dashboard",
    element: <Dashboard />,
  },

  // {
  //   path: "/bundleup",
  //   element: <Bundleup />,
  // },
  // {
  //   path: "/khaleed",
  //   element: <Khaleed />,
  // },
  // {
  //   path: "/nimor",
  //   element: <Nimor />,
  // },
  // {
  //   path: "/nairaupdatesng",
  //   element: <Nairaupdatesng />,
  // },
  // {
  //   path: "/prettyjhaine",
  //   element: <PrettyJhaine />,
  // },
  // {
  //   path: "/dammyisaac",
  //   element: <DammyIsaac />,
  // },
  // {
  //   path: "/solex",
  //   element: <Solex />,
  // },
]);

function App() {
  return (
    <div className="flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
