import React from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import WorldNews from '~/components/Body/WorldNews';
import Discoveries from '~/components/Body/Discoveries';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <WorldNews />
            <Discoveries />
            Home view
            <Footer />
        </div>
    );
};

export default Home;
