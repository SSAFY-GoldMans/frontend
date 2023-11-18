import { lazy } from 'react';

const Landing = lazy(() => import('./Landing'));
const Login = lazy(() => import('./Login'));
const Main = lazy(() => import('./Main'));
const Map = lazy(() => import('./Map'));
const NotFount = lazy(() => import('./NotFound'));
const Signup = lazy(() => import('./Signup'));

export { Landing, Login, Main, Map, NotFount, Signup };
