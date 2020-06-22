import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import { withRouter, Route, Switch } from "react-router-dom";
import { TranslationServiceHelper } from "../HOC/TranslationServiceHelper";
import { compose } from "redux";
import Home from "../components/Home";
import Terms from "../components/Terms";

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

  return (
    <>
      {!props.isTReady && <Spin className="suspense-spinner" size="large" />}
      {props.isTReady && (
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/terms" component={Terms} />
          </Switch>
        </div>
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
