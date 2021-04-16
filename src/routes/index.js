import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import FinanceDetail from '../views/Finance-Detail';
import AddAccount from '../views/AddAccount'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/details" exact component={FinanceDetail}/>
                <Route path="/addAcount" exact component={AddAccount}/>
            </Switch>
        </BrowserRouter>
    )
}