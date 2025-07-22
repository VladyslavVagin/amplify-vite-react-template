import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import CustomAuthenticator from "../components/Auth/CustomAuthenticator";

const AuthPage = () => {
  const location = useLocation();
  const { authStatus } = useAuthenticator();
  const [initialState, setInitialState] = useState<"signIn" | "signUp">("signIn");

  // Parse hash to determine which auth form to show
  useEffect(() => {
    const hash = location.hash;
    if (hash === "#register" || hash === "#signUp") {
      setInitialState("signUp");
    } else {
      setInitialState("signIn");
    }
  }, [location.hash]);

  // If user is already authenticated, redirect to main page
  if (authStatus === "authenticated") {
    return <Navigate to="/" replace />;
  }

  return (
    <CustomAuthenticator initialState={initialState}>
      <div className="min-h-screen flex flex-col">
        {/* This div will be replaced by the Authenticator component */}
      </div>
    </CustomAuthenticator>
  );
};

export default AuthPage; 