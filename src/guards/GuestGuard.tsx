import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

type TGuestGuard = {
  children: ReactNode
}
const GuestGuard: FC<TGuestGuard> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <>{children}</>
  );
};

export default GuestGuard;