import React, { Fragment } from "react";

import Counter from "../../components/Counter";
import Todo from "../../components/Todo";

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <Counter />
    <Todo />
  </Fragment>
);

export default Home;
