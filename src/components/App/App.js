import React from "react";
import "./App.css";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero>
        <Search />
      </Hero>
    </div>
  );
}

export default App;
