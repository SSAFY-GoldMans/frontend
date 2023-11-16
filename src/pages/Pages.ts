import { lazy } from "react";

const Login = lazy(() => import("./Login"));
const Main = lazy(() => import("./Main"));
const Map = lazy(() => import("./Map"));
const NotFount = lazy(() => import("./NotFound"));

export { Login, Main, Map, NotFount };
