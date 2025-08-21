import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import type { Role } from "../store/slices/userSlice";

type Props = {
  children: React.ReactNode;
  allowedRoles: Role[];
};

export default function ProtectedRoute({ children, allowedRoles }: Props) {
  const { isAuthenticated, role } = useAppSelector((state) => state.user);

  if (!isAuthenticated) return <Navigate to="/" replace />;

  if (!allowedRoles.includes(role)) return <h1>⛔ Access Denied</h1>;

  return <>{children}</>;
}
