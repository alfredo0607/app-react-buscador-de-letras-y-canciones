import React, { Fragment } from "react";

export default function Letra({ letra }) {
  return (
    <Fragment>
      <div className="contendor-letra">
        <h2>Letra</h2>
        <hr className="h"/>
        <p className="letra">{letra}</p>
      </div>
    </Fragment>
  );
}
