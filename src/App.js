import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Logo from "./components/Logo";
import Switch from "./components/Switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="wrapper">
        <div>
          <Switch btn="On" switchBtn={switch1} setSwitch={setSwitch1} />
          <Switch btn="On" switchBtn={switch2} setSwitch={setSwitch2} />
          <Switch btn="On" switchBtn={switch3} setSwitch={setSwitch3} />
        </div>
        <div>
          <Switch btn="Off" switchBtn={switch1} setSwitch={setSwitch1} />
          <Switch btn="Off" switchBtn={switch2} setSwitch={setSwitch2} />
          <Switch btn="Off" switchBtn={switch3} setSwitch={setSwitch3} />
        </div>
        <div className="container-display">
          <Display switch1={switch1} switch2={switch2} switch3={switch3} />
        </div>
      </main>
      <footer>
        <p>Made at le Reacteur by Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
