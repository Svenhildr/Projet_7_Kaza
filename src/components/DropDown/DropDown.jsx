import React, { useState } from "react";

function DropDown({ title, arrow, content }) {
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
        {selectedItem ? <p className="dropDownContentText">{content}</p> : ""}
      </div>
    </div>
  );
}

export default DropDown;
