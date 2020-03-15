import React, { FunctionComponent, Fragment, useEffect } from 'react';

import DiscoveryLayout from '~/layouts/DsicoveryLayout';
import DiscoveryKnight, {
    DiscoveryKnightProps,
} from '~/sections/DiscoveryKnight';
import DiscoveryHero, { DiscoveryHeroProps } from '~/sections/DiscoveryHero';
import DiscoveryParagraph, {
    DiscoveryParagraphProps,
} from '~/sections/DiscoveryParagraph';

const Discovery: FunctionComponent<DiscoveryCombinedProps> = ({
    background,
    title,
    subtitle,
    author,
    noteAuthorImage,
    notePost,
    noteTitle,
    paragraphComment,
    paragraphImage,
    paragraphText,
}: DiscoveryCombinedProps) => {
    const className = 'discovery';
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className={className}>
            <DiscoveryLayout
                content={
                    <Fragment>
                        <DiscoveryHero
                            background={background}
                            title={title}
                            subtitle={subtitle}
                            author={author}
                        />
                        <DiscoveryKnight
                            noteAuthorImage={noteAuthorImage}
                            notePost={notePost}
                            noteTitle={noteTitle}
                        />
                        <DiscoveryParagraph
                            paragraphComment={paragraphComment}
                            paragraphImage={paragraphImage}
                            paragraphText={paragraphText}
                        />
                    </Fragment>
                }
            />
        </div>
    );
};

type DiscoveryCombinedProps = DiscoveryHeroProps &
    DiscoveryKnightProps &
    DiscoveryParagraphProps;

export default Discovery;
