import Home from "../screens/Home";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";

const routes = [
  {
    path: "",
    component: Home,
    name: "Home Page",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard Screen",
    protected: true,
  }
];

export default routes;
