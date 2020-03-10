import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    HashRouter,
    Route,
} from 'react-router-dom';

import { Routes } from './constants';
import { ApplicationState } from '~/store/storeTypes';
import { StoryContentItems } from '~/store/storeTypes';

import Story from '~/views/Story';
import Home from '~/views/Home';
import Discovery from '~/views/Discovery';
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
                    <Route exact path={Routes.discovery}>
                        <Discovery />
                    </Route>
                </HashRouter>
            </Switch>
        </Router>
    );
};

const mapStateToProps = (state: ApplicationState): StoryPages => {
    return {
        storyContent: state.storyContent,
    };
};

interface StoryPages {
    storyContent: Array<StoryContentItems>;
}

export default connect(mapStateToProps)(App);
