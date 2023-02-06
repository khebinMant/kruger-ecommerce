import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import "./styles/button.scss";
import "primereact/resources/themes/arya-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "animate.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_de from "./translations/de/global.json";
import global_fr from "./translations/fr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    de: {
      global: global_de,
    },
    fr: {
      global: global_fr,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
