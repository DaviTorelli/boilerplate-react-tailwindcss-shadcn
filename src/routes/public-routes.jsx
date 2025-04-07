//* Libraries imports
import { Route, Routes } from "react-router-dom";

//* Routes imports
import navigation from "@/routes/navigation";

/**
 * Only displays public routes.
 * If your project includes authentication, consider creating a private-routes file to handle your logic.
 */
export default function PublicRoutes() {
  return (
    <Routes>
      {navigation.map((route, index) => (
        <Route id={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}
