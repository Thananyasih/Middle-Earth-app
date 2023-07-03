import React, { useState } from "react";
import "./Home.css";
import Maps from "./Map";
import EventsFilter from "../components/Filter/EventsFilter";
import PathsFilter from "../components/Filter/PathsFilter";
import InfoFilter from "../components/Filter/InfoFilter";
import PlacesFilter from "../components/Filter/PlacesFilter";

const Home = () => {
  const [eventsOpen, setEventsOpen] = useState(false);
  const [pathsOpen, setPathsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [placesOpen, setPlacesOpen] = useState(false);

  const cancelHandler = () => {
    setEventsOpen(eventsOpen);
    setPathsOpen(pathsOpen);
    setInfoOpen(infoOpen);
    setPlacesOpen(placesOpen);
  };

  const eventsHandler = () => {
    setEventsOpen((eventsOpen) => !eventsOpen);
    if (!eventsOpen) {
      setPathsOpen((pathsOpen) => "");
      setInfoOpen((infoOpen) => "");
      setPlacesOpen((placesOpen) => "");
    }
  };

  const pathsHandler = () => {
    setPathsOpen((pathsOpen) => !pathsOpen);
    if (!pathsOpen) {
      setEventsOpen((eventsOpen) => "");
      setInfoOpen((infoOpen) => "");
      setPlacesOpen((placesOpen) => "");
    }
  };

  const infoHandler = () => {
    setInfoOpen((infoOpen) => !infoOpen);
    if (!infoOpen) {
      setEventsOpen((eventsOpen) => "");
      setPathsOpen((pathsOpen) => "");
      setPlacesOpen((placesOpen) => "");
    }
  };

  const placesHandler = () => {
    setPlacesOpen((placesOpen) => !placesOpen);
    if (!placesOpen) {
      setEventsOpen((eventsOpen) => "");
      setPathsOpen((pathsOpen) => "");
      setInfoOpen((infoOpen) => "");
    }
  };

  return (
    <div className="container">
      <div className="header" onClick={cancelHandler}>
        <h1 id="header-title">The world of Middle Earth </h1>

        <Maps />
      </div>

      <div id="topics">
        <ul id="topics__list"></ul>
        <li>
          <button
            href="Info"
            className="topics__info"
            style={{
              borderColor: !infoOpen ? "" : "#ffe27be6",
              backgroundColor: !infoOpen ? "" : "#000000e6",
              color: !infoOpen ? "" : "#ffe27be6",
              padding: !infoOpen ? "" : "10px 80px",
            }}
            onClick={infoHandler}
          >
            Info
          </button>
        </li>
        {infoOpen ? <InfoFilter /> : ""}

        <li>
          <button
            href="Events"
            className="topics__events"
            style={{
              borderColor: !eventsOpen ? "" : "#ffe27be6",
              backgroundColor: !eventsOpen ? "" : "#000000e6",
              color: !eventsOpen ? "" : "#ffe27be6",
              padding: !eventsOpen ? "" : "8px 90px",
            }}
            onClick={eventsHandler}
          >
            Events
          </button>
          {eventsOpen ? <EventsFilter /> : ""}
        </li>

        <li>
          <button
            href="Paths"
            className="topics__paths"
            style={{
              borderColor: !pathsOpen ? "" : "#ffe27be6",
              backgroundColor: !pathsOpen ? "" : "#000000e6",
              color: !pathsOpen ? "" : "#ffe27be6",
              padding: !pathsOpen ? "" : "8px 80px",
            }}
            onClick={pathsHandler}
          >
            Paths
          </button>
          {pathsOpen ? <PathsFilter /> : ""}
        </li>
        <li>
          <button
            href="Timelines"
            className="topics__timelines"
            // style={{
            //   borderColor: !eventsOpen ? "" : "#ffe27be6",
            //   backgroundColor: !eventsOpen ? "" : "#000000e6",
            //   color: !eventsOpen ? "" : "#ffe27be6",
            //   padding: !eventsOpen ? "" : "10px 40px",
            // }}
            // onClick={filterHandler}
          >
            Timelines
          </button>
        </li>

        <li>
          <button
            href="Places"
            className="topics__places"
            style={{
              borderColor: !placesOpen ? "" : "#ffe27be6",
              backgroundColor: !placesOpen ? "" : "#000000e6",
              color: !placesOpen ? "" : "#ffe27be6",
              padding: !placesOpen ? "" : "10px 80px",
            }}
            onClick={placesHandler}
          >
            Places
          </button>
          {placesOpen ? <PlacesFilter /> : ""}
        </li>
      </div>
    </div>
  );
};

export default Home;
