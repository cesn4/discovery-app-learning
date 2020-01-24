import * as React from "react";
// react-router-dom reikalingas kad galetum kurt 'virtualius' puslapius, va linkas su detalesnem instrukcijom
// https://reacttraining.com/react-router/web/example/basic
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from '~/views/Home';

const App = () => {
    return (
        <Router>
            <Switch>
                {/* Eilute po apacia nurodo kad pagrindinis route (http://localhost:3000) atidarys Home view komponenta */}
                {/* Jeigu path parasytum <Route exact path="/home"> tokiu atveju reiktu narsyklej suvest http://localhost:3000/home */}
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
