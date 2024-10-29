import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import React from "react";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return;
  }

  if (!userId) {
    return <Navigate to="/sign-in" />;
  }

  return <div>{element}</div>;
};
