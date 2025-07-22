import { FC } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

const SignOutButton: FC = () => {
  const { signOut } = useAuthenticator();
  return (
    <button onClick={signOut} className="btn btn-secondary w-full md:w-40">
      Sign out
    </button>
  );
};

export default SignOutButton;
