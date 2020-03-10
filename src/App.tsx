import React, { FunctionComponent, ReactChild } from 'react';
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

const App: FunctionComponent<StoryPages> = ({ storyContent }: StoryPages) => {
    const renderStoryPages: Array<ReactChild> = storyContent.map(
        ({ id }: IdObject, index) => {
            const route = '/story/' + id + '';
            console.log(route);
            return (
                <Route exact path={route} key={index.toString()}>
                    <Story />
                </Route>
            );
        }
    );
    return (
        <Router>
            <Switch>
                <HashRouter>
                    <Route exact path={Routes.home}>
                        <Home />
                    </Route>
                    {renderStoryPages}
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
interface IdObject {
    id: string;
}

export default connect(mapStateToProps)(App);
