import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn: FC = () => {
  const { loginWithRedirect, loginWithPopup } = useAuth0();

  return (
    <>
      <div>Sign In</div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => loginWithPopup()}>Sign Up</button>
    </>
  );
};

export default SignIn