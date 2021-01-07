import './App.css';
import React from 'react';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import MainComponent from './components/Main/MainComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';

function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header><HeaderComponent/></Header>
      <Content><MainComponent/></Content>
      <Footer><FooterComponent/></Footer>
    </Layout>
  )
}

export default App;
