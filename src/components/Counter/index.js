import { connect } from "react-redux";
import { increment, decrement, reset } from "../../store/reducers/counter";

import Counter from "./design";

const mapStateToProps = ({ counter }) => ({
  counter
});

const mapDispatchToProps = dispatch => ({
  incr: () => dispatch(increment()),
  decr: () => dispatch(decrement()),
  rst: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
