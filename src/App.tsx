import React, { FunctionComponent } from 'react';
// react-router-dom reikalingas kad galetum kurt 'virtualius' puslapius, va linkas su detalesnem instrukcijom
// https://reacttraining.com/react-router/web/example/basic
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Routes } from './types';
import Story from '~/views/Story';
import Home from '~/views/Home';
import '~/config/layout';

const App: FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={Routes.home}>
                    <Home />
                </Route>
                <Route exact path={Routes.story}>
                    <Story />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
