import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import FinanceDetail from '../views/Finance-Detail';
import AddAccount from '../views/AddAccount';
import AddBankAccount from '../views/AddBankAccount';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/details" exact component={FinanceDetail}/>
                <Route path="/addAccount" exact component={AddAccount}/>
                <Route path="/addBankAccount" exact component={AddBankAccount}/>
            </Switch>
        </BrowserRouter>
    )
}