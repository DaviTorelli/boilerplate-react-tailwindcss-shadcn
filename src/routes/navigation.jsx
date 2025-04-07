//* Libraries imports
import { Grid, Home as HomeIcon } from "lucide-react";

//* Pages imports
import Home from "@/pages/public";
import Dashboard from "@/pages/public/dashboard";

/**
 * 1. Add the path we want or our component to be displayed.
 * 2. Add the component itself
 * 3. Add a icon, to represent this component
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
  { path: "/", component: <Home />, icon: <HomeIcon /> },
  { path: "/dashboard", component: <Dashboard />, icon: <Grid /> },
];

export default navigation;
