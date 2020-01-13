import React from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <Knight />
            <Footer />
        </div>
    );
};

export default Home;
