import React, { Fragment } from "react";

const Todo = ({ todos, submitText, setTxt, text }) => (
  <Fragment>
    <ul>
      {todos.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
    <input type="text" onChange={setTxt} value={text} />
    <button onClick={submitText}>Submit</button>
  </Fragment>
);

export default Todo;
