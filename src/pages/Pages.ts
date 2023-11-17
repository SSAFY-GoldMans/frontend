import { lazy } from 'react';

const Login = lazy(() => import('./Login'));
const Main = lazy(() => import('./Main'));
const Map = lazy(() => import('./Map'));
const NotFount = lazy(() => import('./NotFound'));
const Signup = lazy(() => import('./Signup'));

export { Login, Main, Map, NotFount, Signup };
