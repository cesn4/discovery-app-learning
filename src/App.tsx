import React, { FunctionComponent } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    HashRouter,
    Route,
} from 'react-router-dom';

import { Routes } from './constants';
import Home from '~/views/Home';
import Discovery from '~/views/Discovery';
import '~/config/layout';
import StoriesContainer from '~/containers/StoriesContainer';

const App: FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <HashRouter>
                    <Route exact path={Routes.home}>
                        <Home />
                    </Route>
                    <StoriesContainer />
                    <Route exact path={Routes.discovery}>
                        <Discovery />
                    </Route>
                </HashRouter>
            </Switch>
        </Router>
    );
};

export default App;
