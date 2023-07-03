import React from "react";

const pointStyle = {
  cursor: "pointer",
};

const PointLabel = ({ cx, cy, id }) => {
  return <circle id={id} style={pointStyle} fill="red" cx={cx} cy={cy} />;
};

export default PointLabel;
