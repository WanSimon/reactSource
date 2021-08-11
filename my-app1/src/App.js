import logo from "./logo.svg";
import "./App.css";
import { NameForm2, Reservation } from "./pages/9.Form";
import ReducerDemo from "./Hook/ReducerDemo";
import { Calcu, Calculator } from "./components/10.promotionStateConfiguration";
import tryConvert from "../src/components/tryConvert";
import switchTemperature from "../src/components/switchTemperature";
import { CalculatorEnd } from "../src/components/CalculatorEnd";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/*       <NameForm2 />
      <ReducerDemo></ReducerDemo>
      <Reservation />
      <Calculator></Calculator>
      <Calcu></Calcu>
      <tryConvert temperature></tryConvert> */}
      <CalculatorEnd />
    </div>
  );
}

export default App;
