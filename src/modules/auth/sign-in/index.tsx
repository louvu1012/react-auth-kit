import { FC } from "react";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const SignIn: FC = () => {
  const signOut = useSignOut();
  const signIn = useSignIn();
  const authUser = useAuthUser();
  const onSubmit = () => {
    if (signIn({
      auth: {
        token: 'ey....mA',
        type: 'Bearer'
      },
      refresh: 'ey....mA',
      userState: {
        name: 'React User',
        uid: 123456
      },
    })) {
      // Redirect or do-something
      console.log(authUser)
    } else {
      //Throw error
    }
  }

  const handle = () => console.log(authUser)

  return (
    <>
      <div>Sign In</div>
      <button onClick={onSubmit}>Login</button>
      <button onClick={handle}>Handle</button>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default SignIn