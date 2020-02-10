import React, { FunctionComponent } from 'react';

import './IconLabel.scss';

const IconLabel: FunctionComponent<IconLabelProps> = ({
    label,
}: IconLabelProps) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'icon-label';

    return (
        <div className={className}>
            <img className={`${className}__image`}></img>
            <span className={`${className}__label`}>{label}</span>
        </div>
    );
};

interface IconLabelProps {
    label: string;
}

export default IconLabel;
