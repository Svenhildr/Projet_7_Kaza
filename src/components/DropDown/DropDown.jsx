import React, { useState } from "react";

function DropDown({ title, arrow, content, children }) {
  const [selectedItem, setSelectedItem] = useState(false);

  const handleDropdownChange = () => {
    setSelectedItem(!selectedItem);
  };

  return (
    <div className="dropDownContainer">
      <div className="dropDown" onClick={handleDropdownChange}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="drop down arrow"
          className={selectedItem ? "contentHidden" : "contentDisplayed"}
        />
      </div>

      <div className="dropDownContent">
        {selectedItem ? (
          <div className="dropDownContentText">
            {content}
            {children}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default DropDown;
//
