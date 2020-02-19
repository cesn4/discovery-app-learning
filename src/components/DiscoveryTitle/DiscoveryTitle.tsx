import React, { FunctionComponent } from 'react';

import Author from '~/components/Author';

const DiscoveryTitle: FunctionComponent<DsicoveryTitleProps> = ({
    title,
    subtitle,
    image,
}: DsicoveryTitleProps) => {
    const className = 'discovery-title';
    return (
        <div className={`${className}`}>
            <h1 className={`${className}__title`}>{title}</h1>
            <div className={`${className}__separator`}></div>
            <p className={`${className}__subtitle`}>{subtitle}</p>
            <div className={`${className}__author-img`}>
                <Author image={image} />
            </div>
        </div>
    );
};
interface DsicoveryTitleProps {
    title: string;
    subtitle: string;
    image: string;
}

export default DiscoveryTitle;
