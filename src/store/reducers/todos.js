import uuidv4 from "uuid/v4";

// Types.
const TODOS_ADD_TODO = "todos/add_todo";
const TODOS_DELETE_TODO = "todos/delete_todo";

// Actions.
export const addTodo = text => ({
  type: TODOS_ADD_TODO,
  todo: {
    text,
    id: uuidv4()
  }
});
export const deleleTodo = id => ({
  type: TODOS_DELETE_TODO,
  id
});

// Reducer.
const todos = (state = [], action) => {
  switch (action.type) {
    case TODOS_ADD_TODO:
      return [...state, ...[action.todo]];
    case TODOS_DELETE_TODO:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default todos;
