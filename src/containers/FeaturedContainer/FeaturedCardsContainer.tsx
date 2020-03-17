import React, { FunctionComponent, Fragment, ReactChild } from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '~/store/types';
import { DiscoveryPages } from '~/containers/DiscoveriesContainer';
import FeaturedCard from '~/components/FeaturedCard';

const FeaturedCardsContainer: FunctionComponent<DiscoveryPages> = ({
    discoveryContent,
}: DiscoveryPages) => {
    const renderFeaturedCards: Array<ReactChild> = discoveryContent.map(
        (
            { id, title, subtitle, background, category }: FeaturedCardsItems,
            index
        ) => {
            if (id <= 2) {
                let firstItem = false;
                if (id === 1) {
                    firstItem = true;
                }
                let lastItem = false;
                if (id === 2) {
                    lastItem = true;
                }

                const route = '#/discovery/' + id;

                return (
                    <Fragment key={index.toString()}>
                        <FeaturedCard
                            href={route}
                            firstItem={firstItem}
                            lastItem={lastItem}
                            theme={category}
                            time="2min ago"
                            title={title}
                            paragraph={subtitle}
                            background={background}
                        />
                    </Fragment>
                );
            } else {
                return <Fragment key={index.toString()}></Fragment>;
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
    category: string;
}

export default connect(mapStateToProps)(FeaturedCardsContainer);
