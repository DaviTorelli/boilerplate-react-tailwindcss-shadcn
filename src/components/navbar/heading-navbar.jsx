//* Libraries imports
import { Link } from "react-router-dom";

//* Routes imports
import navigation from "@/routes/navigation";

export function HeadingNavbar() {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <h1 className="font-bold">REACT VITE + TAILWINDCSS + SHADCN/UI</h1>
        <div className="flex items-center gap-2">
          {navigation.map((route, index) => (
            <Link
              id={index}
              to={route.path}
              className="px-6 transition-colors duration-300 text-muted-foreground hover:text-neutral-800"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
