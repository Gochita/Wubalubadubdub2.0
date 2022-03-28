import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Barrita = () => {
  return (
    <Fragment>
      <div>
        <img src={require("../imagen/rickymorty.png")} />
        <br></br>
      </div>
    </Fragment>
  );
};

export default Barrita;