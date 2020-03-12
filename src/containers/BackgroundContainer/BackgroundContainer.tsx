import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '~/store/storeTypes';
import { DiscoveryPages } from '../DiscoveriesContainer';
import Background from '~/components/Background';

const BackgroundContainer: FunctionComponent<DiscoveryPages> = ({
    discoveryContent,
}: DiscoveryPages) => {
    const backgroundContent = discoveryContent[2];
    if (backgroundContent) {
        const route = '#/discovery/' + backgroundContent.id;
        return (
            <Fragment>
                <Background
                    href={route}
                    background={backgroundContent.background}
                    title={backgroundContent.title}
                    subtitle={backgroundContent.subtitle}
                    paragraph={backgroundContent.paragraphComment}
                />
            </Fragment>
        );
    } else {
        return <Fragment></Fragment>;
    }
};

const mapStateToProps = (state: ApplicationState): DiscoveryPages => {
    return {
        discoveryContent: state.discoveryContent,
    };
};
export default connect(mapStateToProps)(BackgroundContainer);
