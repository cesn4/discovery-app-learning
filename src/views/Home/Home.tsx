import React, { FunctionComponent, Fragment } from 'react';

import PageLayout from '~/layouts/PageLayout';
import Hero from '~/sections/Hero';
import Knight from '~/sections/Knight';
import Featured from '~/sections/Featured';

const Home: FunctionComponent = () => {
    return (
        <div className="home">
            <PageLayout
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
