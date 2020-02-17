import React, { FunctionComponent } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    HashRouter,
    Route,
} from 'react-router-dom';

import { Routes } from './types';
import Story from '~/views/Story';
import Home from '~/views/Home';
import '~/config/layout';

const App: FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <HashRouter>
                    <Route exact path={Routes.home}>
                        <Home />
                    </Route>
                    <Route exact path={Routes.story}>
                        <Story />
                    </Route>
                </HashRouter>
            </Switch>
        </Router>
    );
};

export default App;
