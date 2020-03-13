import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import PostInfo from '~/components/PostInfo';
import { ApplicationState } from '~/store/storeTypes';
import { DiscoveryPages } from '../DiscoveriesContainer';

const PostInfoContainer: FunctionComponent<DiscoveryPages> = ({
    discoveryContent,
}: DiscoveryPages) => {
    const renderPostInfo = discoveryContent.map(
        ({ id, title, subtitle, category }: PostInfoItems, index) => {
            if (id >= 4) {
                let className = '';
                if (id === 4) {
                    className = 'hero__first-post';
                } else if (id === 5) {
                    className = 'hero__second-post';
                }

                const route = '#/discovery/' + id;

                return (
                    <Fragment>
                        <div className={className} key={index.toString()}>
                            <PostInfo
                                href={route}
                                title={category}
                                subtitle={title}
                                primaryText={subtitle}
                            />
                        </div>
                    </Fragment>
                );
            } else {
                return <Fragment></Fragment>;
            }
        }
    );
    return <Fragment>{renderPostInfo}</Fragment>;
};

const mapStateToProps = (state: ApplicationState): DiscoveryPages => {
    return {
        discoveryContent: state.discoveryContent,
    };
};

interface PostInfoItems {
    category: string;
    title: string;
    subtitle: string;
    id: number;
}

export default connect(mapStateToProps)(PostInfoContainer);