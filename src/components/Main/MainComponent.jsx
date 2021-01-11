import React from 'react';
import { Route } from 'react-router-dom';
import SearchFood from './SearchFood/SearchFoodComponent';
import Exercise from './Exercise/ExerciseComponent'

const MainComponent = () => {
  return (
    <main>
      <Route exact path="/" render={() => <div>Default page</div>} />
      <Route path="/search_food" render={() => <SearchFood/>} />
      <Route path="/exercise" render={() => <Exercise/>} />
    </main>
  );
};

export default MainComponent;
