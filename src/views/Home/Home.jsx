import React from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import WorldNews from '~/components/Body/WorldNews';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <WorldNews />
            Home view
            <Footer />
        </div>
    );
};

export default Home;
