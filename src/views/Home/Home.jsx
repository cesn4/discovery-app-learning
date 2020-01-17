import React, { useState } from 'react';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';

const Home = () => {
    const [sidebarOpen, setSidebar] = useState(false);

    const drawerToggleClickHandler = () => {
        setSidebar({ sidebarOpen: !sidebarOpen });
    };

    return (
        <div className="home">
            {sidebarOpen === false ? undefined : <Sidebar drawSidebar={drawerToggleClickHandler}/>}
            <Header drawSidebar={drawerToggleClickHandler}/>
            <Hero />
            Home view
            <Footer />
        </div>
    );
};

export default Home;
