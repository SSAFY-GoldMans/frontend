import { Landing, Login, Main, MyPage, NotFount, Signup } from '@/pages/Pages';

import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import { BROWSER_PATH } from '@/constants/path';
import PrivateWrapper from './PrivateWrapper';

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={BROWSER_PATH.BASE} element={<Landing />} />
      <Route path={BROWSER_PATH.LOGIN} element={<Login />} />
      <Route path={BROWSER_PATH.HOME} element={<Main />} />
      <Route path={BROWSER_PATH.SIGNUP} element={<Signup />} />
      <Route element={<PrivateWrapper />}>
        <Route path={BROWSER_PATH.MY} element={<MyPage />} />
      </Route>
      <Route path={'*'} element={<NotFount />} />
    </BrowserRoutes>
  );
}

export default Routes;
