import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createHashHistory } from "history";
import { Layout, Menu, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { withRouter, Route, Switch } from "react-router-dom";
import { TranslationServiceHelper } from "../HOC/TranslationServiceHelper";
import { compose } from "redux";
import Home from "../components/Home";
import Terms from "../components/Terms";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const BrowserHistory = createHashHistory();
//https://api.github.com/users/devAbhijeet
const AppRoutes = props => {
  const locationPath = props && props.location && props.location.pathname;
  useEffect(() => {
    const pathNameTerms = locationPath.includes("/terms");
    const pathNameHome = locationPath.includes("/home");
    if (pathNameTerms && !props.hasNameSpaceLoaded("terms")) {
      props.loadNameSpaces("terms");
    } else if (pathNameHome) {
      props.loadNameSpaces("home");
    }
  }, [props.location]);

  const redirect = path => {
    BrowserHistory.replace(`/${path}`);
  };

  return (
    <>
      {!props.isTReady && <Spin className="suspense-spinner" size="large" />}
      {props.isTReady && (
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1" onClick={() => redirect("")}>
                Home
              </Menu.Item>
              <Menu.Item key="2" onClick={() => redirect("about")}>
                About
              </Menu.Item>
              <Menu.Item key="3" onClick={() => redirect("terms")}>
                Terms
              </Menu.Item>
              <SubMenu key="sub2" icon={<DownOutlined />} title="Language">
                <Menu.Item key="6">English</Menu.Item>
                <Menu.Item key="8">Spanish</Menu.Item>
              </SubMenu>
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
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/terms" component={Terms} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            React i18n Demo ©2020. This UI is created using Ant Design.
          </Footer>
        </Layout>
      )}
    </>
  );
};

AppRoutes.propTypes = {
  isTReady: PropTypes.bool.isRequired,
  hasNameSpaceLoaded: PropTypes.func.isRequired,
  loadNameSpaces: PropTypes.func.isRequired
};

export default compose(
  withRouter,
  TranslationServiceHelper
)(AppRoutes);
