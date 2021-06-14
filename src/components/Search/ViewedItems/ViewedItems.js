import React from "react";
import PropTypes from "prop-types";
import "./ViewedItems.css";

function ViewedItems({ selectedItems }) {
  return (
    <div className="viewed-items">
      <h4>Last viewed: </h4>

      {selectedItems.map((item, index) => {
        return (
          <div className="viewed-item" key={index}>
            <span>{item.name}</span>
            <span> {item.time}</span>
          </div>
        );
      })}
    </div>
  );
}

ViewedItems.propTypes = {
  selectedItems: PropTypes.array
};

export default ViewedItems;
