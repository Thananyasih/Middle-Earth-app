import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import map1 from "../assets/MEmap.svg";
import "./Map.css";
import SearchBar from "../components/Search/SearchBar";

const Maps = (prop) => {
  return (
    <div>
      <TransformWrapper
        defaultScale={1}
        minScale={0.9}
        maxScale={2.5}
        defaultPositionX={100}
        defaultPositionY={200}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <div>
            <TransformComponent>
              <div className="map_container">
                <img
                  className="map-1"
                  src={map1}
                  alt="Middle Earth Maps"
                  useMap="#image-map"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </TransformComponent>
          </div>
        )}
      </TransformWrapper>
      <SearchBar />
    </div>
  );
};

export default Maps;
