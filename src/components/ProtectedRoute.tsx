import { Navigate } from "react-router-dom";
import type { Role } from "../config/routes";
import { JSX } from "react";

type Props = {
  element: JSX.Element;
  allowedRoles: Role[];
  userRole: Role;
};

export default function ProtectedRoute({ element, allowedRoles, userRole }: Props) {
  if (allowedRoles.includes(userRole)) {
    return element;
  }
  return <Navigate to="/" replace />;
}
