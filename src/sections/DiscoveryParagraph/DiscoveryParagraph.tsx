import React, { FunctionComponent, Fragment } from 'react';

import Paragraph from '~/components/Paragraph';

const DiscoveryParagraph: FunctionComponent<DiscoveryParagraphProps> = ({
    paragraphImage,
    paragraphText,
    paragraphComment,
}: DiscoveryParagraphProps) => {
    return (
        <Fragment>
            <Paragraph
                image={paragraphImage}
                paragraph={paragraphText}
                comment={paragraphComment}
            />
        </Fragment>
    );
};

export interface DiscoveryParagraphProps {
    paragraphImage: string;
    paragraphText: string;
    paragraphComment: string;
}

export default DiscoveryParagraph;
