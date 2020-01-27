import React, { FunctionComponent, useState } from 'react';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';
import Featured from '~/sections/Featured';

const Home: FunctionComponent = () => {
    // TODO: None of these 2 "muscle" functions should exist on Home component
    //Sidebar muscles
    const [sidebarState, setSidebarState] = useState(false);

    const sidebarOpen: VoidFunction = () => {
        setSidebarState(!sidebarState);
    };
    const sidebarClose: VoidFunction = () => {
        setSidebarState(false);
    };

    return (
        <div className="home">
            <Sidebar isOpen={sidebarState} closeSidebar={sidebarClose} />
            <Header
                drawSidebar={sidebarOpen}
            />
            <Hero />
            <Knight />
            <Featured />
            <Footer />
        </div>
    );
};

export default Home;
