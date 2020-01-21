import React, { useState } from 'react';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';

const Home = () => {
    const [sidebarState, setSidebarState] = useState(true);

    const sidebarOpen = () => {
        setSidebarState(!sidebarState);
    };

    const sidebarClose = () => {
        setSidebarState(false);
    };

    return (
        <div className="home">
            <Sidebar isOpen={sidebarState} closeSidebar={sidebarClose}/>
            <Header drawSidebar={sidebarOpen}/>
            <Hero />
            Home view
            <Footer />
        </div>
    );
};

export default Home;
