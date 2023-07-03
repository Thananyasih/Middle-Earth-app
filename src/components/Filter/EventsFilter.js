// import React, { useState } from "react";
import "./EventsFilter.css";

const EventsFilter = () => {
  // const [isCheck, setIsCheck] = useState(false);

  // const checkHandler = () => {
  //   setIsCheck((isCheck) => !isCheck);
  // };
  return (
    <div className="events-form">
      <div id="book_filter">
        <h4>BY BOOK :</h4>
        <label className="form-control">
          <input
            type="checkbox"
            name="checkbox"
            // onClick={checkHandler}
          ></input>
          The Hobbit
        </label>
        <p />
        <label className="form-control">
          <input
            type="checkbox"
            name="checkbox"
            // onClick={checkHandler}
          ></input>
          {/* <span className="checkmark"></span> */}
          The Lord of the Rings
        </label>
      </div>
      <div id="year_filter">
        <h4>BY YEAR :</h4>
        <label className="form-control">
          <input
            type="checkbox"
            name="checkbox"
            // onClick={checkHandler}
          ></input>
          T.A. 3018
        </label>
        <p />
        <label className="form-control">
          <input
            type="checkbox"
            name="checkbox"
            // onClick={checkHandler}
          ></input>
          T.A. 3019
        </label>
      </div>
    </div>
  );
};

export default EventsFilter;
