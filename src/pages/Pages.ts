import { lazy } from "react";

const Main = lazy(() => import("./Main"));
const Map = lazy(() => import("./Map"));
const NotFount = lazy(() => import("./NotFound"));

export { Main, Map, NotFount };
