import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import { NameForm2 } from "../src/pages/9.Form"; */
import App from "./App";
import Hook from "../src/pages/Hook";
/* import reportWebVitals from "./reportWebVitals";
import { NameForm } from "../src/pages/9.Form"; */
/*
ReactDOM.render( */
/*   <React.StrictMode>
    <App />
  </React.StrictMode> */
/*   <App />,
  document.getElementById("root")
); */

ReactDOM.render(
  /*   <React.StrictMode>
    <App />
  </React.StrictMode> */
  <Hook />,
  document.getElementById("root")
);

/* ReactDOM.render(<NameForm />, document.getElementById("root")); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals();
 */

/* class NameForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm1 />, document.getElementById("root"));
 */
/* ReactDOM.render(<NameForm2></NameForm2>, document.getElementById("root"));
 */
