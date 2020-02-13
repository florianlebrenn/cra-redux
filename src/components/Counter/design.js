import React, { Fragment } from "react";

const Counter = ({ counter, incr, decr, rst }) => (
  <Fragment>
    <button onClick={decr}>-</button>
    <strong>Counter with redux: {counter}</strong>
    <button onClick={incr}>+</button>
    <button onClick={rst}>Reset</button>
  </Fragment>
);

export default Counter;
