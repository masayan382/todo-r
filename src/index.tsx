import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={Login} />
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);

reportWebVitals();
