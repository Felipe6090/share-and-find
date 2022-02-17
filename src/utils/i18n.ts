import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_US from "./languages/en_US";
import pt_BR from "./languages/pt_BR";

i18next.use(LanguageDetector).init({
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: {
    default: ["en"],
  },
  resources: {
    en: {
      translation: en_US,
    },
    "pt-BR": {
      translation: pt_BR,
    },
  },
});

export default i18next;
