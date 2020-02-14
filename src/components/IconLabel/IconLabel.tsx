import React, { FunctionComponent } from 'react';

import { IconType } from '~/components/SVGIcon/SVGIcon';
import SVGIcon from '~/components/SVGIcon';

import './IconLabel.scss';

const IconLabel: FunctionComponent<IconLabelProps> = ({
    label,
    name,
}: IconLabelProps) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'icon-label';

    return (
        <div className={className}>
            <a href="#/story" className={`${className}__anchor`}>
                <SVGIcon name={name} className={`${className}__icon`} />
                <span className={`${className}__label`}>{label}</span>
            </a>
        </div>
    );
};

interface IconLabelProps {
    label: string;
    name: IconType;
}

export default IconLabel;
