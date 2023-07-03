import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const titleChangeHandler = (event) => {
    event.preventDefault();
    setEnteredName(event.target.value);
  };
  return (
    <form>
      <div className="form_container">
        <input
          className="search_input"
          type="text"
          value={enteredName}
          placeholder="⚲ Search Area . . . ."
          onChange={titleChangeHandler}
        />
      </div>
    </form>
  );
};
export default SearchBar;
