import React, { FunctionComponent, ReactChild } from 'react';

import SocialButton from '~/components/SocialButton';
import { IconType } from '~/components/Icons/Icon';

import './SocialBar.scss';

const SocialBar: FunctionComponent = () => {
    const className = 'social-bar';
    const list: Array<SocialBarProps> = [
        { name: 'instagram' },
        { name: 'facebook' },
        { name: 'twitter' },
        { name: 'web' },
    ];

    const renderList: Array<ReactChild> = list.map(
        ({ href, name }: SocialBarProps, index) => {
            return (
                <div key={index.toString()} className={`${className}__icon`}>
                    <SocialButton name={name} href={href} />
                </div>
            );
        }
    );
    return <div className={className}>{renderList}</div>;
};

interface SocialBarProps {
    href?: string;
    name: IconType;
}

export default SocialBar;
