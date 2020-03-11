import React, { FunctionComponent, Fragment, ReactChild } from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '~/store/storeTypes';
import { DiscoveryPages } from '~/containers/DiscoveriesContainer';
import FeaturedCard from '~/components/FeaturedCard';

const FeaturedCardsContainer: FunctionComponent<DiscoveryPages> = ({
    discoveryContent,
}: DiscoveryPages) => {
    const renderFeaturedCards: Array<ReactChild> = discoveryContent.map(
        ({ id, title, subtitle, background }: FeaturedCardsItems, index) => {
            if (id <= 2) {
                let firstItem = false;
                if (id === 1) {
                    firstItem = true;
                }
                let lastItem = false;
                if (id === 2) {
                    lastItem = true;
                }
                return (
                    <Fragment key={index.toString()}>
                        <FeaturedCard
                            firstItem={firstItem}
                            lastItem={lastItem}
                            theme="Travel"
                            time="2min ago"
                            title={title}
                            paragraph={subtitle}
                            background={background}
                        />
                    </Fragment>
                );
            } else {
                return <Fragment></Fragment>;
            }
        }
    );
    return <Fragment>{renderFeaturedCards}</Fragment>;
};

const mapStateToProps = (state: ApplicationState): DiscoveryPages => {
    return {
        discoveryContent: state.discoveryContent,
    };
};

interface FeaturedCardsItems {
    id: number;
    background: string;
    title: string;
    subtitle: string;
}

export default connect(mapStateToProps)(FeaturedCardsContainer);
