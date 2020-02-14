import React, { FunctionComponent } from 'react';

import HomeLayout from '~/layouts/HomeLayout';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';
import Featured from '~/sections/Featured';

const Home: FunctionComponent = () => {
    return (
        <div className="home">
            <HomeLayout
                content={
                    <div>
                        <Hero />
                        <Knight />
                        <Featured />
                    </div>
                }
            />
        </div>
    );
};

export default Home;
