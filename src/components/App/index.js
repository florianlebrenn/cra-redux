import React, { useEffect } from "react";
//import { map, pipe } from "lodash/fp";
import App from "./design";

const withFPDemo = Component => props => {
  useEffect(() => {
    // code to run on component mount.
    console.log("DEBUG on mount");

    //https://ajinkya.js.org/2018/05/02/functional-programming-es6-cheatsheet.html
  }, []);

  return <Component {...props} />;
};

export default withFPDemo(App);
