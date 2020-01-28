import React, { FunctionComponent, useState } from 'react';

import DropDownMenu from '~/components/DropdownMenu';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';
import Featured from '~/sections/Featured';

const Home: FunctionComponent = () => {
    //DropDownMenu muscles
    const [dropDownMenuState, setDropDownMenuState] = useState(false);

    const dropDownMenuHandler: VoidFunction = () => {
        setDropDownMenuState(!dropDownMenuState);
    };

    return (
        <div className="home">
            <Header
                homeButton={dropDownMenuHandler}
            />
            <DropDownMenu isOpen={dropDownMenuState} />
            <Hero />
            <Knight />
            <Featured />
            <Footer />
        </div>
    );
};

export default Home;
