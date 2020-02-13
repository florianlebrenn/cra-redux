import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "../../helpers";
import { addTodo, deleleTodo } from "../../store/reducers/todos";

import Todo from "./design";

const withText = Component => props => {
  const [text, setText] = useState("");
  const resetText = () => setText("");
  return (
    <Component {...props} text={text} resetText={resetText} setText={setText} />
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = (dispatch, { text, resetText, setText }) => ({
  submitText: () => {
    dispatch(addTodo(text));
    resetText();
  },
  deleteItem: id => dispatch(deleleTodo(id)),
  setTxt: e => setText(e.target.value)
});

export default compose(
  withText,
  connect(mapStateToProps, mapDispatchToProps)
)(Todo);
