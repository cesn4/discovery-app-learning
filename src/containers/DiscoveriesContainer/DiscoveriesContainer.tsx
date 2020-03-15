import React, { FunctionComponent, Fragment, ReactChild } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { ApplicationState, DiscoveryContentItems } from '~/store/storeTypes';
import Discovery from '~/views/Discovery';

const DiscoveriesContainer: FunctionComponent<DiscoveryPages> = ({
    discoveryContent,
}: DiscoveryPages) => {
    const renderDiscoveryPages: Array<ReactChild> = discoveryContent.map(
        (
            {
                id,
                background,
                title,
                subtitle,
                authorImage,
                noteAuthorImage,
                notePost,
                noteTitle,
                paragraphComment,
                paragraphImage,
                paragraphText,
            }: DiscoveryContentItems,
            index
        ) => {
            const route = '/discovery/' + id;
            console.log(route);
            return (
                <Fragment key={index.toString()}>
                    <Route exact path={route}>
                        <Discovery
                            background={background}
                            title={title}
                            subtitle={subtitle}
                            author={authorImage}
                            noteAuthorImage={noteAuthorImage}
                            notePost={notePost}
                            noteTitle={noteTitle}
                            paragraphComment={paragraphComment}
                            paragraphImage={paragraphImage}
                            paragraphText={paragraphText}
                        />
                    </Route>
                </Fragment>
            );
        }
    );
    return <Fragment>{renderDiscoveryPages}</Fragment>;
};

const mapStateToProps = (state: ApplicationState): DiscoveryPages => {
    return {
        discoveryContent: state.discoveryContent,
    };
};

export interface DiscoveryPages {
    discoveryContent: Array<DiscoveryContentItems>;
}

export default connect(mapStateToProps)(DiscoveriesContainer);
