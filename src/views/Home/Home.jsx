import React, { Component } from 'react';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';

class Home extends Component {
    state = {
        sidebarOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sidebarOpen: !prevState.sidebarOpen};
        });
    };

    render () {
        return (
            <div className="home">
                <Sidebar />
                <Header />
                <Hero />
                Home view
                <Footer />
            </div>
        );
    };
};

export default Home;
