import React, { useState } from 'react';

import DropdownMenu from '~/components/DropdownMenu';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';
import Featured from '~/sections/Featured';

const Home = () => {
    const [dropdownState, setDropdownState] = useState(false);

    const dropdownHandler = () => {
        setDropdownState(!dropdownState);
    };

    return (
        <div className="home">
            <Header homeButton={dropdownHandler}/>
            <DropdownMenu isOpen={dropdownState}/>
            <Hero />
            <Knight />
            <Featured />
            <Footer />
        </div>
    );
};

export default Home;
