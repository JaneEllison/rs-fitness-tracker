import React from 'react';
import { Route } from 'react-router-dom';
import SearchFood from './SearchFood/SearchFoodComponent';
import ExersiseComponent from './Exersise/ExersiseComponent';

const MainComponent = () => {
  return (
    <main>
      <Route exact path="/" render={() => <div>Default page</div>} />
      <Route path="/search_food" render={() => <SearchFood/>} />
      <Route path="/todo" render={() => <ExersiseComponent/>}/>
    </main>
  );
};

export default MainComponent;
