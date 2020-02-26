import React, { FunctionComponent, ReactChild } from 'react';

import SocialButton, { SocialButtonProps } from '~/components/SocialButton';

import './SocialBar.scss';

const SocialBar: FunctionComponent = () => {
    const className = 'social-bar';
    const list: Array<SocialButtonProps> = [
        { name: 'instagram' },
        { name: 'facebook' },
        { name: 'twitter' },
        { name: 'web' },
    ];

    const renderList: Array<ReactChild> = list.map(
        ({ href, name }: SocialButtonProps, index) => {
            return (
                <div key={index.toString()} className={`${className}__icon`}>
                    <SocialButton name={name} href={href} />
                </div>
            );
        }
    );
    return <div className={className}>{renderList}</div>;
};

export default SocialBar;
