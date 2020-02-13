import React, { Fragment, useCallback } from "react";

const TodoItem = ({ id, text, deleteItem }) => {
  // const onClickDelete = () => deleteItem(id);
  const memoizedOnClickDelete = useCallback(() => deleteItem(id), [
    id,
    deleteItem
  ]);

  return (
    <li key={`todo-item-${id}`}>
      {text}
      <button onClick={memoizedOnClickDelete}>x</button>
    </li>
  );
};

const Todo = ({ todos, submitText, setTxt, text, deleteItem }) => (
  <Fragment>
    <ul>
      {todos.map(({ text, id }, index) => (
        <TodoItem key={id} id={id} text={text} deleteItem={deleteItem} />
      ))}
    </ul>
    <input type="text" onChange={setTxt} value={text} />
    <button onClick={submitText}>Submit</button>
  </Fragment>
);

export default Todo;
