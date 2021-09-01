import React, { useState } from "react";

import "./Select.css";

function Select({ value, label, name, items, changeHandler }) {
  const [dropdownState, setDropdownState] = useState(false);

  const dropdownHandler = () => setDropdownState(!dropdownState);

  const selectHandler = (item) => () => {
    changeHandler(item);
    setDropdownState(false);
  };

  return (
    <div className="select">
      <label>{label}</label>

      <div
        className={`select_input ${
          dropdownState ? "select_input--active" : ""
        }`}
        onClick={dropdownHandler}
      >
        {value}
      </div>

      <div
        className={`select_dropdown ${
          dropdownState ? "select_dropdown--expanded" : ""
        }`}
      >
        {items.map((el, i) => (
          <div className="select_option" key={i} onClick={selectHandler(el)}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select;
