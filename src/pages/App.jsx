//* Libraries imports
import React from "react";
import { Link } from "react-router-dom";

//* Components imports
import { Button } from "@/components/ui/button";

//* Routes imports
import PublicRoutes from "@/routes/public-routes";
import navigation from "@/routes/navigation";

export default function App() {
  return (
    <div className="px-4 py-2">
      {/* Navigation display */}
      <nav className="flex items-center gap-2 pb-2">
        {navigation.map((route, index) => (
          <Link id={index} to={route.path}>
            <Button size="icon">{route.icon}</Button>
          </Link>
        ))}
      </nav>

      {/* Showing the component */}
      <PublicRoutes />
    </div>
  );
}
