import { 
    Main, 
    Map, 
    NotFount 
} from "../pages/Pages";

import { Route, Routes as BrowserRoutes } from "react-router-dom";

import { BROWSER_PATH } from "../constants/path";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={BROWSER_PATH.BASE} element={<Main />} />
      <Route path={BROWSER_PATH.MAP} element={<Map />} />
      <Route path={"*"} element={<NotFount />} />
    </BrowserRoutes>
  );
}

export default Routes;
