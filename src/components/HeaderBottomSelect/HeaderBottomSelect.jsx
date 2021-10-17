import React from "react";

import "./HeaderBottomSelect.scss";

function HeaderBottomSelect({ value, title }) {
  return (
    <div className="HeaderBottomSelect">
      {title.map((item) => {
        return (
          <>
            <select name="" id="">
              <option value={value}>{item}</option>
              <option value={value}>{item}</option>
              <option value={value}>{item}</option>
              <option value={value}>{item}</option>
            </select>
          </>
        );
      })}
    </div>
  );
}

export default HeaderBottomSelect;
