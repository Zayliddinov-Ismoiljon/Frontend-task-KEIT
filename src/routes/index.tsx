import { IoHomeOutline } from "react-icons/io5";
import { TypeRoutes } from "./types";
import Dashboard from "../pages/dashboard";
import CarsIndex from "../pages/cars";
import CarCreate from "../pages/cars/crud/create";
import CarUpdate from "../pages/cars/crud/update";
import CarView from "../pages/cars/crud/view";
import { FaCar } from "react-icons/fa";

export const _routes: Array<TypeRoutes> = [
  //Layoutga o'ralmaydigan pagelar 
];

export const sidebar_routes: Array<TypeRoutes> = [
  {
    name: "홈페이지",
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
    name: "차량 페이지",
    path: "/cars",
    component: CarsIndex,
    config: {
      permession: "*",
      icon: FaCar,
      structure: "layout",
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Car create",
    path: "/cars/car-create",
    component: CarCreate,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "layout",
      isMenu: false,
    },
    submenu: [],
  },
  {
    name: "Car update",
    path: "/cars/car-update/:id",
    component: CarUpdate,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "layout",
      isMenu: false,
    },
    submenu: [],
  },
  {
    name: "Car view",
    path: "/cars/car-view/:id",
    component: CarView,
    config: {
      permession: "*",
      icon: IoHomeOutline,
      structure: "layout",
      isMenu: false,
    },
    submenu: [],
  },
];
