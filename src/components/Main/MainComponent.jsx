import React from 'react';
import { Route } from 'react-router-dom';
import FoodComponent from './Food/FoodComponent';

const MainComponent = () => {
  return (
    <main>
      <Route exact path="/" render={() => <div>Default page</div>} />
      <Route path="/search_food" render={() => <FoodComponent/>} />
      <Route path="/todo" render={() => <div>Todo</div>} />
    </main>
  );
};

export default MainComponent;
