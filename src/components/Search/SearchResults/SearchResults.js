import React from "react";
import PropTypes from "prop-types";
import "./SearchResults.css";
import * as dateFormat from "../../../utils/date";

function SearchResults({ query, results, setViewedItem, limitViewedItems }) {
  const getCurrentDate = () => {
    let now = new Date();
    return dateFormat.formatDateTime(now);
  };

  const handleResultOnClick = result => {
    const timeOfSelection = getCurrentDate();
    const lastViewedItems =
      JSON.parse(localStorage.getItem("lastViewedItems")) || [];

    limitViewedItems(lastViewedItems, 4);

    lastViewedItems.unshift({ name: result.strMeal, time: timeOfSelection });

    localStorage.setItem("lastViewedItems", JSON.stringify(lastViewedItems));

    setViewedItem(result, timeOfSelection);
  };

  const showQueryInBold = (query, result) => {
    let index = result.toLowerCase().indexOf(query.toLowerCase());

    if (index !== -1) {
      let length = query.length;

      let prefix = result.substring(0, index);
      let suffix = result.substring(index + length);
      let match = result.substring(index, index + length);

      return (
        <span>
          {prefix}
          <span className="search-results-bold">{match}</span>
          {suffix}
        </span>
      );
    }
  };

  return results ? (
    <div className={`search-results ${query ? "open" : ""}`}>
      {results.map((result, index) => (
        <div
          className="search-results-item"
          key={index}
          onClick={() => handleResultOnClick(result)}
        >
          {showQueryInBold(query, result.strMeal)}
        </div>
      ))}
    </div>
  ) : (
    <div className="search-results-empty">
      Oops! No matches, try another one.
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.array,
  query: PropTypes.string.isRequired,
  setViewedItem: PropTypes.func.isRequired
};

export default SearchResults;
