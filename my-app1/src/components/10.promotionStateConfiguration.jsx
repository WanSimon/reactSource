import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

/* class Cal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = { temperature: "" };
  }
  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter data</legend>
        <input value={temperature} onChange={this.handleChange}></input>
        <BoilingVerdict></BoilingVerdict>
      </fieldset>
    );
  }
} */
const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState(e.target.value);
  }
  render() {
    const scale = this.props.scale;
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}




class Calcu extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c"></TemperatureInput>
        <TemperatureInput scale="f"></TemperatureInput>
      </div>
    );
  }
}

export { BoilingVerdict, Calculator, Calcu, TemperatureInput };
