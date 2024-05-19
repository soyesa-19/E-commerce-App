// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // load translations using http (default public/assets/locals/en/translations.json)
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    fallbackLng: "en", // default language
    lng: "en", // initial language
    ns: ["header"],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}/translation.json",
    },
  });

export default i18n;
