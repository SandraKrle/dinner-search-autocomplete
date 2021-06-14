import React from "react";
import "./Search.css";
import SearchResults from "./SearchResults/SearchResults";
import ViewedItems from "./ViewedItems/ViewedItems";
import Input from "./Input/Input";

class Search extends React.Component {
  state = {
    query: "",
    results: [],
    lastViewedItems: JSON.parse(localStorage.getItem("lastViewedItems")) || [],
    isLoading: false,
    error: null
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState({ query });
    if (query) {
      this.makeApiCall(query);
    } else {
      this.setState({ results: [] });
    }
  };

  makeApiCall = query => {
    var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
      query
    )}`;
    fetch(searchUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(jsonData => {
        this.setState({ results: jsonData.meals, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  limitViewedItems = (items, limit) => {
    if (items.length >= limit) {
      items.splice(limit - 1);
    }
    return items;
  }

  setViewedItem = (viewedItem, timeOfSelection) => {
    this.setState(prevState => ({
      lastViewedItems: [
        { name: viewedItem.strMeal, time: timeOfSelection },
        ...this.limitViewedItems(prevState.lastViewedItems, 4)
      ],
      results: [],
      query: ""
    }));
  };

  render() {
    const { query, results, lastViewedItems } = this.state;

    return (
      <>
        <div className="search">
          <Input query={query} handleInputChange={this.handleInputChange}/>

          <SearchResults
            query={query}
            results={results}
            setViewedItem={this.setViewedItem}
            limitViewedItems = {this.limitViewedItems}
          />
        </div>

        {lastViewedItems.length && (
          <ViewedItems selectedItems={lastViewedItems} />
        )}
      </>
    );
  }
}

export default Search;
