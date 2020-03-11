import React, { FunctionComponent } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    HashRouter,
    Route,
} from 'react-router-dom';

import { Routes } from './constants';
import Home from '~/views/Home';
import '~/config/layout';
import StoriesContainer from '~/containers/StoriesContainer';
import DiscoveriesContainer from './containers/DiscoveriesContainer';

const App: FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <HashRouter>
                    <Route exact path={Routes.home}>
                        <Home />
                    </Route>
                    <StoriesContainer />
                    <DiscoveriesContainer />
                </HashRouter>
            </Switch>
        </Router>
    );
};

export default App;
