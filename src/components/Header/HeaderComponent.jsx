import React from 'react';
import NavMenuComponent from './NavMenu/NavMenuComponent';
import { useFirebase } from 'react-redux-firebase';
import AuthMenuComponent from './AccountMenu/AuthMenuComponent';
import { Col, Row } from 'antd';

const HeaderComponent = () => {
  const firebase = useFirebase();

  console.log(firebase);
  return (
    <header>
        <Row align="space-between">
          <Col >
            <NavMenuComponent/>
          </Col>
          <Col >
            <AuthMenuComponent/>
          </Col>
        </Row>
    </header>
  );
};

export default HeaderComponent;
