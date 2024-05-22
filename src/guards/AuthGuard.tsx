import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

type TAuthGuard = {
  children: ReactNode
}
const AuthGuard: FC<TAuthGuard> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;

  if (!isAuthenticated) return <Navigate to="/auth/sign-in" replace />;

  return (
    <>{children}</>
  );
};

export default AuthGuard;