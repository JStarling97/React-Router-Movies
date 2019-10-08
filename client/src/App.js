import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
