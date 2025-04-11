//* Pages imports
import Home from "@/pages/public";
import Dashboard from "@/pages/public/dashboard";
import Help from "@/pages/public/help";

/**
 * 1. Add the path we want or our component to be displayed.
 * 2. Add the component itself
 * 3. Add a name, describe the route
 *
 * @example
 * ```js
 * const routes = [
 *   { path: "/", component: <Home /> },
 *   { path: "/dashboard", component: <Dashboard /> },
 *   ...
 * ];
 * ```
 *
 **/
const navigation = [
  { path: "/", component: <Home />, name: "Home" },
  { path: "/dashboard", component: <Dashboard />, name: "Dashboard" },
  { path: "/help", component: <Help />, name: "Help" },
];

export default navigation;
