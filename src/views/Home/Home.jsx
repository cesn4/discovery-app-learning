import React from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            Home view
            <Footer />
        </div>
    );
};

export default Home;
