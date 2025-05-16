import React, { createContext, useContext, useEffect, useState } from "react";

import { AuthContextType, userType } from "../types/types";

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: "",
  user: {
    id: "",
    email: "",
    username: "",
    emailVerified: false,
    profilePicture: "",
    bundles: [""],
  },
  loading: true,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [user, setUser] = useState<userType>({
    id: "",
    email: "",
    username: "",
    emailVerified: false,
    profilePicture: "",
    bundles: [""],
  });

  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (!storedToken) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/verify`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (res.ok) {
          setIsAuthenticated(true);
          setToken(storedToken);
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
          console.log("authenticated");
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  const login = (token: string, user: userType) => {
    const userString = JSON.stringify(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", userString);
    setToken(token);
    setUser(user);

    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
