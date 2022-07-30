import React from "react";
import graph from "../images/graph.svg";

export default function Stats() {
  return (
    <div className="p-3">
      <h3 className="text-white text-2xl">Stats</h3>
      <img src={graph} alt="" />
    </div>
  );
}
