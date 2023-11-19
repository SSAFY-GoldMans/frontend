import { Landing, Login, Main, NotFount, Signup } from '@/pages/Pages';

import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import { BROWSER_PATH } from '@/constants/path';

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={BROWSER_PATH.BASE} element={<Landing />} />
      <Route path={BROWSER_PATH.LOGIN} element={<Login />} />
      <Route path={BROWSER_PATH.HOME} element={<Main />} />
      <Route path={BROWSER_PATH.SIGNUP} element={<Signup />} />
      <Route path={'*'} element={<NotFount />} />
    </BrowserRoutes>
  );
}

export default Routes;
