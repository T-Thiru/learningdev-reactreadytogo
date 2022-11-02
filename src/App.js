import "./App.css";
import Display from "./components/Display";
import Logo from "./components/Logo";
import Switch from "./components/Switch";

function App() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="wrapper">
        <div>
          <Switch switch="On" />
          <Switch switch="On" />
          <Switch switch="On" />
        </div>
        <div>
          <Switch switch="Off" />
          <Switch switch="Off" />
          <Switch switch="Off" />
        </div>
        <div className="container-display">
          <Display />
        </div>
      </main>
      <footer>
        <p>Made at le Reacteur by Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
