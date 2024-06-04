import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";
import { Users } from "./pages/Users";

export const routes = [
  {
    id: 1,
    component: Users,
    path: "/users",
  },
  {
    id: 2,
    component: UserInfo,
    path: "/users/:id",
  },
  {
    id: 3,
    component: About,
    path: "/about",
  },
  {
    id: 4,
    component: Contact,
    path: "/contact",
  },
  {
    id: 5,
    component: Login,
    path: "/login",
  },
  {
    id: 6,
    component: Home,
    path: "/",
  },
];
