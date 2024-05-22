import { Navigate, useRoutes } from "react-router-dom";
import SignIn from "./auth/sign-in";
import UserList from "./dashboard/user/list";
import UserEdit from "./dashboard/user/edit";
import { FC } from "react";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";

const Router: FC = () => {
  return useRoutes([
    {
      path: 'dashboard',
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard/user" replace />
        },
        {
          path: 'user',
          children: [
            {
              index: true,
              element: <Navigate to="/dashboard/user/list" replace />
            },
            {
              path: 'list',
              element: (
                <AuthGuard>
                  <UserList />
                </AuthGuard>
              ),
            },
            {
              path: 'edit',
              element: (
                <AuthGuard>
                  <UserEdit />
                </AuthGuard>
              ),
            },
          ],
        },
      ],
    },
    {
      path: 'auth',
      children: [
        {
          path: 'sign-in',
          element: (
            <GuestGuard>
              <SignIn />
            </GuestGuard>
          ),
        },
      ],
    },
    // Route cuối cùng sẽ chuyển hướng về trang đăng nhập khi không khớp với bất kỳ route nào trong ứng dụng
    {
      path: '*',
      element: (
        <GuestGuard>
          <SignIn />
        </GuestGuard>
      ),
    }
  ]);
};

export default Router;