import React from "react";
import "./PathsFilter.css";

const PathsFilter = () => {
  return (
    <div className="paths-form">
      <div id="hobbit_filter">
        <h4>THE HOBBIT :</h4>
        <label className="paths-control">
          <input type="checkbox" name="checkbox"></input>
          Gandalf Gray
        </label>
        <p />
        <label className="paths-control">
          <input type="checkbox" name="checkbox"></input>
          Thorin and Company
        </label>
        <p />
        <label className="paths-control">
          <input type="checkbox" name="checkbox"></input>
          Bilbo Beckins
        </label>
      </div>
      <div id="lotr_filter">
        <h4>THE LOTR :</h4>
        <label className="paths-control">
          <input type="checkbox" name="checkbox"></input>
          Aragorn
        </label>
        <p />
        <label className="paths-control">
          <input type="checkbox" name="checkbox"></input>
          Gandalf
        </label>
        <p />
        <label className="paths-control">
          <input type="checkbox" name="checkbox"></input>
          Legolas and Gimli
        </label>
        <p />
        <label className="paths-control">
          <input type="checkbox" name="checkbox"></input>
          Frodo and Sam
        </label>
        <p />
        <label className="paths-control">
          <input type="checkbox" name="checkbox"></input>
          Merry and Pippin
        </label>
        <p />
      </div>
    </div>
  );
};

export default PathsFilter;
