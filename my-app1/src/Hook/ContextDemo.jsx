import React, { useState, useContext } from "react";

const themeContext = React.createContext("#567");
const Child = () => {
  const bgColor = useContext(themeContext);
  const style = {
    backgroundColor: bgColor,
  };
  return <div style={style}>Child</div>;
};

const Demo = () => {
  return (
    <div>
      <Child />
    </div>
  );
};

export default function ContextDemo() {
  const [bgColor, setBgColor] = useState("#000");
  return (
    <>
      <input
        type="color"
        onChange={(ev) => console.log(ev.target.value)}
      ></input>
      <button onClick={() => setBgColor("red")}>换色</button>
      <themeContext.Provider value={bgColor}>
        <Demo></Demo>
      </themeContext.Provider>
    </>
  );
}
