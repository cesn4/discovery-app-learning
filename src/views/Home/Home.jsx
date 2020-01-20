import React, { useState } from 'react';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';

const Home = () => {
    const [sidebarOpen, setSidebar] = useState(false);

    const drawerToggleClickOpener = () => {
        setSidebar((prevState) => {
            return { sidebarOpen: !prevState.sidebarOpen };
        });
    };

    const drawerToggleClickCloser = () => {
        setSidebar({ sidebarOpen: false });
    };

    let sidebar;

    if (sidebarOpen) {
        sidebar = <Sidebar drawSidebar={drawerToggleClickCloser}/>;
    }

    return (
        <div className="home">
            {sidebar}
            <Header drawSidebar={drawerToggleClickOpener}/>
            <Hero />
            Home view
            <Footer />
        </div>
    );
};

export default Home;
