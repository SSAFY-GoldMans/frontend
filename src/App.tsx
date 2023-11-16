import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router></Router>
      <div>hello, React</div>
    </RecoilRoot>
  );
}

export default App;
