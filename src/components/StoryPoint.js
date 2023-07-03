import React from "react";

const pointStyle = {
  cursor: "pointer",
};

const StoryLine = ({ cx, cy, id, name }) => {
  return <circle id={id} style={pointStyle} fill="#FFFFFF" cx={cx} cy={cy} />;
};

export default StoryLine;
