import React, { useState } from "react";

import "./Select.css";

function Select({ defaultValue, label, name, items }) {
  const [selected, setSelected] = useState(defaultValue);
  const [dropdownState, setDropdownState] = useState(false);

  const dropdownHandler = () => setDropdownState(!dropdownState);

  const selectHandler = (item) => () => {
    setSelected(item);
    setDropdownState(false);
  };

  return (
    <div className="select">
      <label>{label}</label>
      <input type="text" hidden name={name} value={selected} />

      <div
        className={`select_input ${
          dropdownState ? "select_input--active" : ""
        }`}
        onClick={dropdownHandler}
      >
        {selected}
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
