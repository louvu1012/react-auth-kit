import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserList: FC = () => {
  const { logout } = useAuth0();

  return (
    <>
      <div>User List</div>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};

export default UserList