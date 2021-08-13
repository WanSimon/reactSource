import "./Hook.less";
import Example from "../Hook/Example";
import UseEffectExample from "../Hook/UseEffectExample";
import ClassComp from "../Hook/ClassComp";
import { useState } from "react";
import FuncComp from "../Hook/FuncComp";
import ReducerDemo from "../Hook/ReducerDemo";
import ContextDemo from "../Hook/ContextDemo";
import Counter from "../Hook/Counter";

function Hook() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="Hook">
      {/*       <Example />
      <UseEffectExample /> */}
      <ClassComp />
      <button onClick={() => setVisible(!visible)}>
        函數组件显示隐藏：{visible}
        {/*         {visible && <FuncComp />} */}
        {/*         <ReducerDemo />
        <ContextDemo /> */}
        <Counter counter1="0" />
      </button>
    </div>
  );
}

export default Hook;
