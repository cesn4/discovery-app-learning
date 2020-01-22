import React, { useState } from 'react';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';
import Featured from '~/sections/Featured';

const Home = () => {
    const [sidebarState, setSidebarState] = useState(false);

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
            <Knight />
            <Featured />
            <Footer />
        </div>
    );
};

export default Home;
