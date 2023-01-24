import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import "./styles/button.scss";
<<<<<<< HEAD

=======
import "primereact/resources/themes/arya-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'animate.css';
>>>>>>> 35440236f3433b230606ea028837e7779bbf2eec

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
          <HashRouter>
            <App />
          </HashRouter>
    </Provider>
  </React.StrictMode>
);
