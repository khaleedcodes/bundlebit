import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import PageLayout from "./pages/PageLayout";
import "./styles/index.css";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import "./styles/card-animation.css";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

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
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <div className="flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
