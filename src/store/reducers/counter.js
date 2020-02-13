// Types.
const COUNTER_INCREMENT = "counter/increment";
const COUNTER_DECREMENT = "counter/decrement";
const COUNTER_RESET = "counter/reset";

// Actions.
export const increment = () => ({
  type: COUNTER_INCREMENT
});
export const decrement = () => ({
  type: COUNTER_DECREMENT
});
export const reset = () => ({
  type: COUNTER_RESET
});

const initialState = 0;

// Reducer.
const counter = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      if (state === 0) return state; // Reject negative value.
      return state - 1;
    case COUNTER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default counter;
