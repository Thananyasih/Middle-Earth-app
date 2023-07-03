import React, { useState } from "react";
import "../Filter/InfoFilter.css";

const InfoFilter = () => {
  const [filterClose, setfilterClose] = useState(false);

  const closeInfoHandler = () => {
    setfilterClose((filterClose) => !filterClose);
  };

  return (
    <div>
      <div className="info-container">
        {!filterClose && (
          <div id="text-container">
            <button
              id="close-btn"
              href="close filter"
              onClick={closeInfoHandler}
            >
              X
            </button>
            <h1 id="info-title">Welcome to The Middle Earth !</h1>
            <h4 id="info-content">
              <div className="info__1">
                This is collective information fanbased-site about Middle-earth
                by J.R.R Tolkien. In the menu to the right side you can show
                Events, Character Paths, Timelines and Places on the Map.
              </div>
              <div className="info__2">
                Hope you enjoy and have great experience with the project.
              </div>
              <div className="info__3">
                - All respect and love to J.R.R Tolkien -
              </div>
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoFilter;
