import React from "react";
import { TranslationConsumer } from "../providers/TranslationServiceProvider";

export const TranslationServiceHelper = Component =>
  class extends React.Component {
    render() {
      return (
        <TranslationConsumer>
          {context => (
            <Component
              {...this.props}
              {...this.state}
              localeList={context.localeList}
              currentLanguage={context.currentLanguage}
              isTReady={context.isTReady}
              loadNameSpaces={context.loadNameSpaces}
              changeLanguage={context.changeLanguage}
              hasNameSpaceLoaded={context.hasNameSpaceLoaded}
              setEntityPreferredLocale={context.setEntityPreferredLocale}
            />
          )}
        </TranslationConsumer>
      );
    }
  };
