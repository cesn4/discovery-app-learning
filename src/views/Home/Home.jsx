import React, { useState } from 'react';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';

const Home = () => {
    const [sidebarOpen, setSidebar] = useState(false);

    const drawerToggleClickOpener = () => {
        setSidebar({ sidebarOpen: !sidebarOpen });
    };

    return (
        <div className="home">
            <Sidebar isOpen={sidebarOpen} closeSidebar={drawerToggleClickOpener}/>
            <Header drawSidebar={drawerToggleClickOpener}/>
            <Hero />
            Home view
            <Footer />
        </div>
    );
};

export default Home;
