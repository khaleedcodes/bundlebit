import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page/ErrorPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import PublicRoute from "./auth/PublicRoute";
import { AuthProvider } from "./context/AuthContext";
import "./styles/card-animation.css";
import "./styles/index.css";
import "./styles/styles.css";
import PublicBundlePage from "./pages/public-bundle-page/PublicBundlePage";
import ThemeSelectorPage from "./pages/public-bundle-page/ThemeSelectorPage";
import LandingPage from "./pages/landing-page/LandingPage";
import DemoBundlePreview from "./pages/landing-page/demo-section/DemoBundlePreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
    {
    path: "/b/demo",
    element: <DemoBundlePreview />,
  },
  {
    path: "/b/themes",
    element: <ThemeSelectorPage />,
  },
  {
    path: "/b/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/b/signup",
    element: (
      <PublicRoute>
        <SignupPage />
      </PublicRoute>
    ),
  },
  {
    path: "b/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/:username",
    element: <PublicBundlePage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
