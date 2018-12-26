import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CapitalDataProvider from './capitail_data_provider'

import CapitalDetail from "./capital_detail"

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"  component={CapitalDataProvider} />
                    <Route exact path="/detail/:data" component={CapitalDetail} />
                </Switch>
            </Router>
        )
    }
}

export default Routes