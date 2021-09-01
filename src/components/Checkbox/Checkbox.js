import React from "react";

import "./Checkbox.css";

function Checkbox({ className = "", isChecked, checkHandler }) {
  return (
    <div
      className={`checkbox ${className} ${
        isChecked ? "checkbox--checked" : ""
      }`}
      onClick={checkHandler}
    >
      <div></div>
    </div>
  );
}

export default Checkbox;
