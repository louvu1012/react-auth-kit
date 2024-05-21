import { FC } from "react";
// import { useAuth } from "../../../hook/useAuth";
// import { authService } from "../../../hook/useAuth";
// import { signIn } from "../../../contexts/auth/reducers";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

const SignIn: FC = () => {
  // const { dispatch } = useAuth();

  // async function handleSignIn() {
  //   try {
  //     const { accessToken, user } = await authService.signIn();
  //     localStorage.setItem('ACCESS_TOKEN', accessToken);
  //     dispatch(signIn({ user }));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const signIn = useSignIn();
  const auth = useAuthUser()
  const onSubmit = (e: any) => {
    if (signIn({
      auth: {
        token: 'ey....mA',
        type: 'Bearer'
      },
      refresh: 'ey....mA',
      userState: {
        name: 'React User',
        uid: 123456
      }
    })) {
      // Redirect or do-something
    } else {
      //Throw error
    }
  }

  const handle = () => console.log(auth)

  return (
    <>
      <div>Sign In</div>
      <button onClick={onSubmit}>Login</button>
      <button onClick={handle}>Handle</button>
    </>
  );
};

export default SignIn