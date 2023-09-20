import React from "react";
import "./style.css";

export default function Progress({ value }) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: value }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
}
