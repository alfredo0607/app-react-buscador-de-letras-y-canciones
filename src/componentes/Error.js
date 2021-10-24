import React from "react";

export default function Error({ mensaje }) {
  return (
    <div className="contnedor-error">
      <p>{mensaje}</p>
    </div>
  );
}
