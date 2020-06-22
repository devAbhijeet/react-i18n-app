import LocalStorageBackend from "i18next-localstorage-backend";
import XHRBackEnd from "i18next-xhr-backend";

export const isDevelopmentEnv = process.env.NODE_ENV === "development";

export const backEnds = isDevelopmentEnv
  ? [XHRBackEnd]
  : [LocalStorageBackend, XHRBackEnd];

export const loadPath = () => "/locales/{{lng}}/{{ns}}.json";

export const backEndOptions = isDevelopmentEnv
  ? [{ loadPath }]
  : [
      { prefix: "artwork_locale_", versions: { en: "v1", es: "v1" } },
      { loadPath }
    ];
