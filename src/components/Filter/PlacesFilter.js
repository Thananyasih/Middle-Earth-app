import React, { useState } from "react";
import "./PlacesFilter.css";

const PlacesFilter = () => {
  const [viewAllChecked, setViewAllChecked] = useState(false);
  const [settlementsChecked, setSettlementsChecked] = useState(false);
  const [forestsChecked, setForestsChecked] = useState(false);
  const [roadsChecked, setRoadsChecked] = useState(false);
  const [regoinsChecked, setRegionsChecked] = useState(false);
  const [mhChecked, setMhChecked] = useState(false);

  const viewAllHandler = () => {
    setViewAllChecked(!viewAllChecked);
    if (!viewAllChecked) {
      setSettlementsChecked(!settlementsChecked);
      setForestsChecked(!forestsChecked);
      setRoadsChecked(!roadsChecked);
      setRegionsChecked(!regoinsChecked);
      setMhChecked(!mhChecked);
    }
    setSettlementsChecked(settlementsChecked);
    setForestsChecked(forestsChecked);
    setRoadsChecked(roadsChecked);
    setRegionsChecked(regoinsChecked);
    setMhChecked(mhChecked);
  };

  return (
    <div className="places-form">
      <label className="places-control" onChange={viewAllHandler}>
        <input type="checkbox" name="checkbox" />
        view all
      </label>

      <div id="type_filter">
        <h4>BY TYPE :</h4>
        <label className="places-control">
          {!viewAllChecked ? (
            <input type="checkbox" name="checkbox-1" />
          ) : (
            <input
              type="checkbox"
              name="checkbox-1"
              checked={!settlementsChecked}
              style={{ backgroundColor: "#ffe27b" }}
            />
          )}
          Settlements
        </label>

        <p />
        <label className="places-control">
          {!viewAllChecked ? (
            <input type="checkbox" name="checkbox-2" />
          ) : (
            <input
              type="checkbox"
              name="checkbox-2"
              checked={!forestsChecked}
              style={{ backgroundColor: "#ffe27b" }}
            />
          )}
          Forests
        </label>

        <p />
        <label className="places-control">
          {!viewAllChecked ? (
            <input type="checkbox" name="checkbox-2" />
          ) : (
            <input
              type="checkbox"
              name="checkbox-2"
              checked={!roadsChecked}
              style={{ backgroundColor: "#ffe27b" }}
            />
          )}
          Roads
        </label>

        <p />
        <label className="places-control">
          {!viewAllChecked ? (
            <input type="checkbox" name="checkbox-2" />
          ) : (
            <input
              type="checkbox"
              name="checkbox-2"
              checked={!regoinsChecked}
              style={{ backgroundColor: "#ffe27b" }}
            />
          )}
          Regions
        </label>

        <p />
        <label className="places-control">
          {!viewAllChecked ? (
            <input type="checkbox" name="checkbox-2" />
          ) : (
            <input
              type="checkbox"
              name="checkbox-2"
              checked={!mhChecked}
              style={{ backgroundColor: "#ffe27b" }}
            />
          )}
          Mountains and Hills
        </label>
      </div>
    </div>
  );
};

export default PlacesFilter;
