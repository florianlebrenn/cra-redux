// Types.
const TODOS_ADD_TODO = "todos/add_todos";

// Actions.
export const addTodos = text => ({
  type: TODOS_ADD_TODO,
  text
});

// Reducer.
const todos = (state = [], action) => {
  switch (action.type) {
    case TODOS_ADD_TODO:
      return [...state, ...[action.text]];
    default:
      return state;
  }
};

export default todos;
