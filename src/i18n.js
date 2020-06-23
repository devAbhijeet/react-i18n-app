import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-chained-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { backEnds, backEndOptions, isDevelopmentEnv } from "./utils/i18n";

if (isDevelopmentEnv) {
  window.i18n = i18n;
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ["common", "home"],
    defaultNS: "home",
    fallbackLng: "en",
    debug: true,
    load: "languageOnly",
    returnObjects: true,
    joinArrays: true,
    cleanCode: true,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
      useSuspense: false
    },
    backend: {
      backends: backEnds,
      backendOptions: backEndOptions
    }
  });

export default i18n;
