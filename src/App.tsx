import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import { routes } from "./config/routes";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  // 🚀 replace this with real auth later
  const [userRole] = useState<"SUPER_ADMIN" | "ADMIN" | "MAINTAINER" | "USER" | "BLOGGER" | "GUEST">("GUEST");

  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={
                  <ProtectedRoute
                    element={route.element}
                    allowedRoles={route.roles}
                    userRole={userRole}
                  />
                }
              />
            ))}
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
