import React, { FunctionComponent } from 'react';

import './ExtraNavigation.scss';

const ExtraNavigation: FunctionComponent = () => {
    const className = 'extra-navigation';
    return (
        <div className={className}>
            <div className={`${className}__back-box`}></div>
            <div className={`${className}__filter-box`}></div>
        </div>
    );
};

export default ExtraNavigation;
