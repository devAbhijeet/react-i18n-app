import React from "react";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const Home = () => (
  <Layout>
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Terms</Menu.Item>
      </Menu>
    </Header>
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: "80vh" }}
      >
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      React i18n Demo ©2018 Created by Open Source
    </Footer>
  </Layout>
);

export default Home;
