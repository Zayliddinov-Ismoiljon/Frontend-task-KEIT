import { IoHomeOutline, IoLanguageSharp } from "react-icons/io5";
import { TypeRoutes } from "./types";
import Login from "../pages/login";
import Users from "../pages/users";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Barbers from "../pages/students";
import BarbersCreate from "../pages/students/crud/create";
import Role from "../pages/role";
import Language from "../pages/language";
import BarberServices from "../pages/barber_services";
import Salons from "../pages/salons";
import BarbersSalary from "../pages/barbers_salary";
import UserInformation from "../pages/user_information";
import BarberInformation from "../pages/barber_information";
import SalonInformation from "../pages/salon_information";
import { AiOutlineUserAdd } from "react-icons/ai";
import { PiBuildingOffice } from "react-icons/pi";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaBookReaderSolid } from "react-icons/lia";
import Register from "../pages/register";
import SalonCreate from "../pages/salons/crud/create";

export const _routes: Array<TypeRoutes> = [
  {
    name: "Home",
    path: "/",
    component: Home,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "extraLayout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "extraLayout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "extraLayout",
      isMenu: true,
    },
    submenu: [],
  },
];

export const sidebar_routes: Array<TypeRoutes> = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Role",
    path: "/role",
    component: Role,
    config: {
      permession: "*",
      icon: AiOutlineUserAdd,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Language",
    path: "/language",
    component: Language,
    config: {
      permession: "*",
      icon: IoLanguageSharp,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Services",
    path: "/services",
    component: BarberServices,
    config: {
      permession: "*",
      icon: RiCustomerServiceLine,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Salons",
    path: "/salons",
    component: Salons,
    config: {
      permession: "*",
      icon: PiBuildingOffice,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Salon create",
    path: "/salons/salon-create",
    component: SalonCreate,
    config: {
      permession: "*",
      icon: PiBuildingOffice,
      structure: "layout",
      isMenu: false,
    },
    submenu: [],
  },
  {
    name: "Barbers",
    path: "/barbers",
    component: Barbers,
    config: {
      permession: "*",
      icon: FaUsers,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Barber Create",
    path: "/barbers/barber-create",
    component: BarbersCreate,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "layout",
      isMenu: false,
    },
    submenu: [],
  },
  {
    name: "Barbers Salary",
    path: "/barbers-salary",
    component: BarbersSalary,
    config: {
      permession: "*",
      icon: GiTakeMyMoney,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Users",
    path: "/users",
    component: Users,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "My infotmation",
    path: "/user-information",
    component: UserInformation,
    config: {
      permession: "*",
      icon: LiaBookReaderSolid,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "My infotmation",
    path: "/barber-information",
    component: BarberInformation,
    config: {
      permession: "*",
      icon: LiaBookReaderSolid,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "My infotmation",
    path: "/salon-information",
    component: SalonInformation,
    config: {
      permession: "*",
      icon: LiaBookReaderSolid,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
];
