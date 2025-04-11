//* Libraries imports
import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

//* Components imports
import { HeadingNavbar } from "@/components/navbar/heading-navbar";

//* Routes imports
import PublicRoutes from "@/routes/public-routes";

export default function App() {
  return (
    <div className="flex flex-col justify-between h-screen p-8 ">
      <div>
        {/* Navigation display */}
        <HeadingNavbar />

        {/* Showing the component */}
        <div className="pt-6">
          <PublicRoutes />
        </div>
      </div>
      <footer className="flex items-center justify-between">
        <div className="flex gap-4">
          <Link target="_blank" to="https://www.linkedin.com/in/davitorelli">
            <Linkedin className="text-blue-400 transition-colors duration-300 hover:text-blue-800" />
          </Link>
          <Link target="_blank" to="https://github.com/DaviTorelli">
            <Github className="text-gray-400 transition-colors duration-300 hover:text-gray-800" />
          </Link>
        </div>
        <div className="w-64 border-t border-t-black">
          <div>Created by</div>
          <div>Davi Borges Torelli</div>
        </div>
      </footer>
    </div>
  );
}
