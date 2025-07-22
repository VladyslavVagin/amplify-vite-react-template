import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authStatus } = useAuthenticator();

  // If user is not authenticated, redirect to auth page
  if (authStatus !== "authenticated") {
    return <Navigate to="/auth#login" replace />;
  }

  // If user is authenticated, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute; 