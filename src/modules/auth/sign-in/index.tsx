import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn: FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>Sign In</div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
};

export default SignIn