import React, { FunctionComponent, Fragment } from 'react';

import ClassicLayout from '~/layouts/ClassicLayout';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';
import Featured from '~/sections/Featured';

const Home: FunctionComponent = () => {
    return (
        <div className="home">
            <ClassicLayout
                content={
                    <Fragment>
                        <Hero />
                        <Knight />
                        <Featured />
                    </Fragment>
                }
            />
        </div>
    );
};

export default Home;
