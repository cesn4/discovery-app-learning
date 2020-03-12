import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Col, Hidden } from 'react-grid-system';

import { ApplicationState } from '~/store/storeTypes';
import { DiscoveryPages } from '~/containers/DiscoveriesContainer';
import SmallCard from '~/components/SmallCard';

const SmallCardsContainer: FunctionComponent<DiscoveryPages> = ({
    discoveryContent,
}: DiscoveryPages) => {
    const renderSmallCards = discoveryContent.map(
        ({ id, title, background }: SmallCardItems, index) => {
            if (id >= 3) {
                let className = '';
                if (id === 3) {
                    className = 'featured__small-card -first';
                } else if (id === 4) {
                    className = 'featured__small-card -second';
                } else if (id === 5) {
                    className = 'featured__small-card -third';
                }

                let hiddenState = false;
                if (id === 5) {
                    hiddenState = true;
                }

                const route = '#/discovery/' + id;

                return (
                    <Fragment key={index.toString()}>
                        <Hidden sm={hiddenState} md={hiddenState}>
                            <Col md={6} lg={12}>
                                <div className={className}>
                                    <SmallCard
                                        href={route}
                                        image={background}
                                        title={title}
                                        time="4h ago by Days"
                                    />
                                </div>
                            </Col>
                        </Hidden>
                    </Fragment>
                );
            } else {
                return <Fragment></Fragment>;
            }
        }
    );
    return <Fragment>{renderSmallCards}</Fragment>;
};

const mapStateToProps = (state: ApplicationState): DiscoveryPages => {
    return {
        discoveryContent: state.discoveryContent,
    };
};

interface SmallCardItems {
    id: number;
    title: string;
    background: string;
}

export default connect(mapStateToProps)(SmallCardsContainer);
