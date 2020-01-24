import React from 'react';

import './SimpleButton.scss';

const SimpleButton = ({ title, href = '#' }: SimpleButtonProps) => {
    return (
        <a href={href} className="button">
            {title}
        </a>
    );
};

interface SimpleButtonProps {
    href?: string;
    title: string;
}

export default SimpleButton;
