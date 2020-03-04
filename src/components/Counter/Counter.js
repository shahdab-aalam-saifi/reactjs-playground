import "./Counter.css";
import React, { useState } from "react";

const Button = props => (
  <div>
    <button className="btn" onClick={props.action}>
      {props.message}
    </button>
    {props.children}
  </div>
);

const Display = props => <span className="display">{props.message}</span>;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div>
      <Button message={"Click to increment"} action={incrementCounter}>
        <Display message={counter} />
      </Button>
    </div>
  );
};

export default Counter;
