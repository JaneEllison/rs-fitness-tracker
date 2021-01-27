import React from 'react';
import NavMenuComponent from './NavMenu/NavMenuComponent';
import { useFirebase } from 'react-redux-firebase';

const HeaderComponent = () => {
  const firebase = useFirebase();

  console.log(firebase);
  return (
    <header>
        <NavMenuComponent/>
    </header>
  );
};

export default HeaderComponent;
