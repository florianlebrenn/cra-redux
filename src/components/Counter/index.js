import React, { useReducer } from "react";

/*import { connect } from "react-redux";
import { increment, decrement, reset } from "../../store/reducers/counter";*/

import Counter from "./design";

/*const mapStateToProps = ({ counter }) => ({
  counter
});

const mapDispatchToProps = dispatch => ({
  incr: () => dispatch(increment()),
  decr: () => dispatch(decrement()),
  rst: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/

const COUNTER_INCREMENT = "counter/increment";
const COUNTER_DECREMENT = "counter/decrement";
const COUNTER_RESET = "counter/reset";

const initialState = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { counter: state.counter + 1 };
    case COUNTER_DECREMENT:
      return { counter: state.counter - 1 };
    case COUNTER_RESET:
      return { counter: initialState.counter };
    default:
      return state;
  }
};

const increment = () => ({
  type: COUNTER_INCREMENT
});

const withReducer = Component => props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Component
      {...props}
      {...state}
      incr={() => dispatch(increment())}
      decr={() => dispatch({ type: COUNTER_DECREMENT })}
      rst={() => dispatch({ type: COUNTER_RESET })}
    />
  );
};

export default withReducer(Counter);
