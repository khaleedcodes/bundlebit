import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [authChecked, setAuthChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuthChecked(true);
        setIsValid(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          setIsValid(true);
        } else {
          localStorage.removeItem("token");
          setIsValid(false);
        }
      } catch (err) {
        setIsValid(false);
      } finally {
        setAuthChecked(true);
      }
    };

    verifyToken();
  }, []);

  if (!authChecked) return <div>Loading...</div>;
  if (!isValid) return <Navigate to="/b/login" replace />;

  return children;
}

export default ProtectedRoute;
