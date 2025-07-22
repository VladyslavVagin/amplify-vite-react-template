import { useAuthenticator } from "@aws-amplify/ui-react";
import { FC } from "react"


const SignOutButton: FC = () => {
    const { signOut } = useAuthenticator();
  return (
    <button 
      onClick={signOut} 
      className="btn btn-secondary w-full md:w-40"
    >
      Sign out
    </button>
  )
}

export default SignOutButton