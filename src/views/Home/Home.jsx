import React from 'react';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';

const Home = () => {
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

export default Home;
