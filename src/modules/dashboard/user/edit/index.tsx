import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserEdit: FC = () => {
  const { logout } = useAuth0();

  return (
    <>
      <div>User Edit</div>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};

export default UserEdit