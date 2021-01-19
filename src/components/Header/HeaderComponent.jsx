import React from 'react';
import NavMenuComponent from './NavMenu/NavMenuComponent';
import { Col, Row } from 'antd';
import AuthMenuComponent from './AuthMenu/AuthMenuComponent';
import { useFirebase } from 'react-redux-firebase';

const HeaderComponent = () => {
  const firebase = useFirebase();

  console.log(firebase);
  return (
    <header>
      <Row>
        <Col span={12}>
          <NavMenuComponent/>
        </Col>
        <Col span={12}>
          <AuthMenuComponent/>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderComponent;
