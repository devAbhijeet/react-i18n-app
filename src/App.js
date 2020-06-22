import React from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";
import { Router } from "react-router-dom";
import { TranslationServiceProvider } from "./providers/TranslationServiceProvider";
import { AppRoutes } from "./routes/index";
import { createHashHistory } from "history";
import "./i18n";

const BrowserHistory = createHashHistory();
export default function App() {
  const { ready } = useTranslation();
  return (
    <>
      {!ready ? (
        <Spin className="suspense-spinner" size="large" />
      ) : (
        <TranslationServiceProvider>
          <Router history={BrowserHistory}>
            <AppRoutes />
          </Router>
        </TranslationServiceProvider>
      )}
    </>
  );
}
