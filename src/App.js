import React from 'react';
import "antd/dist/antd.css";
import { Layout, Space } from 'antd';
import MainComponent from './components/Main/MainComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import appLayoutConstants from './constants/appLayoutConstants';

function App() {
  const {
    APP_CONTAINER_SPACING_DIRECTION,
    APP_CONTAINER_SPACING_SIZE
  } = appLayoutConstants;
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Space
        direction={APP_CONTAINER_SPACING_DIRECTION}
        size={APP_CONTAINER_SPACING_SIZE}
      >
        <Header><HeaderComponent/></Header>
        <Content><MainComponent/></Content>
        <Footer><FooterComponent/></Footer>
      </Space>
    </Layout>
  )
}

export default App;
