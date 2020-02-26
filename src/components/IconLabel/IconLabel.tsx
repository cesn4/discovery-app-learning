import React, { FunctionComponent } from 'react';

import { IconType } from '~/components/Icons/Icon';
import Icon from '~/components/Icons';

import './IconLabel.scss';

const IconLabel: FunctionComponent<IconLabelProps> = ({
    label,
    name,
}: IconLabelProps) => {
    const className = 'icon-label';

    return (
        <div className={className}>
            <a href="#/story" className={`${className}__anchor`}>
                <Icon name={name} className={`${className}__icon`} />
                <span className={`${className}__label`}>{label}</span>
            </a>
        </div>
    );
};

export interface IconLabelProps {
    label: string;
    name: IconType;
}

export default IconLabel;
