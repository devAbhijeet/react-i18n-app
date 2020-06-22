import React from "react";
import PropType from "prop-types";
import { withTranslation } from "react-i18next";

// eslint-disable-next-line import/no-mutable-exports
let TranslationContext;
// eslint-disable-next-line no-multi-assign
const { Provider, Consumer } = (TranslationContext = React.createContext({
  currentLanguage: "",
  isTReady: false,
  localeList: [],
  setTReady: () => {},
  loadNameSpaces: () => {},
  changeLanguage: () => {},
  hasNameSpaceLoaded: () => {},
  setEntityPreferredLocale: () => {}
}));

class TranslationServiceProvider extends React.Component {
  constructor(props) {
    super(props);
    const { tReady } = this.props;

    this.state = {
      currentLanguage: "",
      isTReady: tReady,
      localeList: [
        { id: 1, name: "English", locale: "en" },
        { id: 2, name: "Spanish", locale: "es" }
      ]
    };
  }

  componentDidMount() {
    const { i18n } = this.props;
    i18n.on("languageChanged", () => {
      this.setTReady(false);
    });
    this.setLang(
      i18n && i18n.language && i18n.language.slice(0, 2).toLocaleLowerCase()
    );
  }

  setLang = lang => {
    this.setState({
      currentLanguage: lang
    });
  };

  setTReady = ready => {
    this.setState({
      isTReady: ready
    });
  };

  loadNameSpaces = ns => {
    const { i18n } = this.props;
    this.setTReady(false);
    i18n.loadNamespaces(ns).then(() => {
      i18n.setDefaultNamespace(ns);
      this.setTReady(true);
    });
  };

  changeLanguage = lang => {
    const { i18n } = this.props;
    this.setTReady(false);
    return i18n.changeLanguage(lang).then(() => {
      this.setTReady(true);
      if (lang) {
        this.setLang(lang.toLocaleLowerCase().slice(0, 2));
      }
    });
  };

  hasNameSpaceLoaded = ns => {
    const { i18n } = this.props;
    return i18n.options.ns.indexOf(ns) > -1;
  };

  setEntityPreferredLocale = locale => {
    this.changeLanguage(locale);
  };

  render() {
    const {
      loadNameSpaces,
      changeLanguage,
      hasNameSpaceLoaded,
      setEntityPreferredLocale
    } = this;
    const contextValue = {
      ...this.state,
      loadNameSpaces,
      changeLanguage,
      hasNameSpaceLoaded,
      setEntityPreferredLocale
    };
    return (
      <Provider
        value={{
          ...contextValue
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

TranslationServiceProvider.propTypes = {
  tReady: PropType.bool.isRequired,
  i18n: PropType.shape({}).isRequired,
  children: PropType.node.isRequired
};

const TranslationServiceProviderT = withTranslation()(
  TranslationServiceProvider
);

export {
  TranslationServiceProviderT as TranslationServiceProvider,
  Consumer as TranslationConsumer,
  TranslationContext
};
