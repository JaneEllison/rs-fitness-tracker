import React from 'react';
import NavMenuComponent from './NavMenu/NavMenuComponent';
import WeatherComponent from './Weather/WeatherComponent';
import { useFirebase } from 'react-redux-firebase';

const HeaderComponent = () => {
  const firebase = useFirebase();

  console.log(firebase);
  return (
    <header>
        <NavMenuComponent/>
        <WeatherComponent/>
    </header>
  );
};

export default HeaderComponent;
