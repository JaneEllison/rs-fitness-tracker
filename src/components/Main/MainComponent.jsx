import React from 'react';
import style from './Main.module.css';
import { Route, Switch } from 'react-router-dom';
import ExerciseComponent from './Exercise/ExerciseComponent';
import StatsComponent from './Stats/StatsComponent';
import FoodComponent from './Food/FoodComponent';
import { Row, Col } from 'antd';
import SignUpComponent from './Authentification/SignUpComponent';
import AccountComponent from './Account/AccountComponent';
import PrivateRoute from '../commonComponents/PrivateRoute';
import SignOut from './Authentification/SignOut';
import SignInComponent from './Authentification/SignInComponent';

const MainComponent = () => {
  return (
    <div className={style.mainComponent}>
      <Row
        align="center"
        justify="center"
      >
        <Col span={22}>
          <Switch>
            <Route exact path="/" render={() => <div>Default page</div>} />
            <Route path="/search_food" render={() => <FoodComponent/>} />
            <Route path="/exercise" render={() => <ExerciseComponent/>} />
            <Route path="/signup" render={() => <SignUpComponent/>} />
            <Route path="/signin" render={() => <SignInComponent/>} />
            <Route path="/stats" render={() => <StatsComponent />} />
            <PrivateRoute path="/account" >
              <AccountComponent/>
            </PrivateRoute>
            <PrivateRoute path="/logout">
              <SignOut/>
            </PrivateRoute>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default MainComponent;
