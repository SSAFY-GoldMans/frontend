import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Layout from "./layout";
import Loading from "./pages/Loading";
import Routes from "./routes/Routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
    <GlobalStyle />
    <RecoilRoot>
      <Router>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </Layout>
      </Router>
    </RecoilRoot>
    </>
  );
}

export default App;
