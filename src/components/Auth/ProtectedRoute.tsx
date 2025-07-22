import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authStatus } = useAuthenticator();

  if (authStatus !== "authenticated") {
    return <Navigate to="/auth#login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute; 