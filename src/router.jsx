import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./App"
import CapitalDetail from "./capital_detail"

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/app" extra={true} component={App} />
                    <Route path="/detail/:data" extra={true} component={CapitalDetail} />
                </Switch>
            </Router>
        )
    }
}

export default Routes