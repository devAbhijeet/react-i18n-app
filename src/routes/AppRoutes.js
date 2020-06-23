import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createHashHistory } from "history";
import { useTranslation } from "react-i18next";
import { Layout, Menu, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { TranslationServiceHelper } from "../HOC/TranslationServiceHelper";
import { compose } from "redux";
import Home from "../components/Home";
import Terms from "../components/Terms";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const BrowserHistory = createHashHistory();

const AppRoutes = props => {
  const locationPath = props && props.location && props.location.pathname;
  const { t } = useTranslation("common");
  useEffect(() => {
    const pathNameTerms = locationPath.includes("/terms");
    const pathNameHome = locationPath.includes("/home");
    if (pathNameTerms) {
      props.loadNameSpaces("terms");
    } else if (pathNameHome) {
      props.loadNameSpaces("home");
    }
  }, [props.location]);

  const redirect = path => {
    BrowserHistory.replace(`/${path}`);
  };

  const handleLanguageChange = locale => {
    const { setEntityPreferredLocale } = props;
    setEntityPreferredLocale(locale);
  };

  return (
    <>
      {!props.isTReady && <Spin className="suspense-spinner" size="large" />}
      {props.isTReady && (
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1" onClick={() => redirect("home")}>
                {t("nav.home")}
              </Menu.Item>
              <Menu.Item key="3" onClick={() => redirect("terms")}>
                {t("nav.terms")}
              </Menu.Item>
              <SubMenu
                key="sub2"
                icon={<DownOutlined />}
                title={t("nav.language")}
              >
                {props.localeList && props.localeList.length > 0
                  ? props.localeList.map(({ id, locale }) => (
                      <Menu.Item
                        key={id}
                        onClick={() => handleLanguageChange(locale)}
                      >
                        {locale.toUpperCase()}
                      </Menu.Item>
                    ))
                  : null}
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
                <Route exact path="/home" component={Home} />
                <Route exact path="/terms" component={Terms} />
                <Redirect exact from="/" to="/home" />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            {t("footer.copyRight")}
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
