import Wrapper from "./components/Wrapper/Wrapper";
import Landing from "./components/Landing/Landing";
import Showcase from "./components/Showcase/Showcase";
import Production from "./components/Production/Production";

import "./App.css";

function App() {
  return (
    <Wrapper>
      <Landing />
      <Showcase />
      <Production />
    </Wrapper>
  );
}

export default App;
