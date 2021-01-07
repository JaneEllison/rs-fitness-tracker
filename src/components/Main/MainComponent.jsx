import React from 'react';
import { Route } from 'react-router-dom';
import SearchFood from './SearchFood/SearchFoodComponent';

const MainComponent = () => {
  return (
    <main>
      <Route exact path="/" render={() => <div>Default page</div>} />
      <Route path="/search_food" render={() => <SearchFood/>} />
      <Route path="/todo" render={() => <div>Todo</div>} />
    </main>
  );
};

export default MainComponent;
