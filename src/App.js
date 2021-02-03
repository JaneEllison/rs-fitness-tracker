import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Space } from 'antd';
import style from './App.module.css';
import MainComponent from './components/Main/MainComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import appLayoutConstants from './constants/appLayoutConstants';

function App() {
  const {
    APP_CONTAINER_SPACING_DIRECTION,
    APP_CONTAINER_SPACING_SIZE,
  } = appLayoutConstants;
  const { Header, Footer, Content } = Layout;
  return (
    <Layout className={style.appLayout}>
      <Space
        className={style.appLayoutSpace}
        direction={APP_CONTAINER_SPACING_DIRECTION}
        size={APP_CONTAINER_SPACING_SIZE}
      >
        <Header><HeaderComponent /></Header>
        <Content className={style.appContent}><MainComponent /></Content>
        <Footer className={style.appFooter}><FooterComponent /></Footer>
      </Space>
    </Layout>
  );
}

export default App;
