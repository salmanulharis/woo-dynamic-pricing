import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app/App";
import "./app/App.css";

ReactDOM.createRoot(document.getElementById("acowdp-root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);