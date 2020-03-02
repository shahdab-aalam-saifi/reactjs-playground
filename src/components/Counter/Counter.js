import './Counter.css';
import React, { useState } from 'react';

// Button Component
function Button(props) {
  return (
    <div>
      <button className="btn" onClick={props.action}>{props.message}</button>
      {/* render child nodes */}
      {props.children}
    </div>
  );
}

// Display Component
function Display(props) {
  return <span className="display">{props.message}</span>;
}

// Counter Component
function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div>
      <Button message={"Click to increment"} action={incrementCounter}>
        <Display message={counter} />
      </Button>
    </div>
  );
}

  export default Counter;