import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";

ReactDOM.render(
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={Login} />
    </Switch>,
    document.getElementById("root")
);

reportWebVitals();
