import React, { FunctionComponent } from 'react';

import ClassicLayout from '~/layouts/ClassicLayout';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';
import Featured from '~/sections/Featured';

const Home: FunctionComponent = () => {
    return (
        <div className="home">
            <ClassicLayout
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
