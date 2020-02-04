import React, { FunctionComponent } from 'react';

import './SimpleButton.scss';

const SimpleButton: FunctionComponent<SimpleButtonProps> = ({
    title,
    href = '#',
}: SimpleButtonProps) => {
    return (
        <a href={href} className="button">
            {title}
            <span className="button__effect"></span>
            <span className="button__effect"></span>
            <span className="button__effect"></span>
            <span className="button__effect"></span>
        </a>
    );
};

interface SimpleButtonProps {
    href?: string;
    title: string;
}

export default SimpleButton;
