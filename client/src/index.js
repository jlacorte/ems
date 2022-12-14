import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import { unregister as unregisterServiceWorker } from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

unregisterServiceWorker();
// registerServiceWorker();