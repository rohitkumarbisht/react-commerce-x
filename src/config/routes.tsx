import { lazy } from "react";

// lazy-loaded pages
const HomePage = lazy(() => import("../pages/HomePage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));

// roles
export type Role =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "MAINTAINER"
  | "USER"
  | "BLOGGER"
  | "GUEST";

// route config
export const routes = [
  {
    path: "/",
    element: <HomePage />,
    roles: ["GUEST", "USER", "ADMIN", "SUPER_ADMIN", "MAINTAINER", "BLOGGER"] as Role[],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    roles: ["ADMIN", "SUPER_ADMIN", "MAINTAINER"] as Role[],
  },
  {
    path: "/blog",
    element: <BlogPage />,
    roles: ["BLOGGER", "ADMIN", "SUPER_ADMIN"] as Role[],
  },
];
