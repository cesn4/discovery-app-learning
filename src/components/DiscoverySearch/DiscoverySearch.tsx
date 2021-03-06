import React, { FunctionComponent } from 'react';

import InputLabel from '~/components/InputLabel';
import SimpleButton from '~/components/SimpleButton';

import './DiscoverySearch.scss';

const DiscoverySearch: FunctionComponent = () => {
    const className = 'discovery-search';
    const list = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className={className}>
            <div className={`${className}__input-dropdown`}>
                <InputLabel type="dropdown" label="Select date" list={list} />
            </div>
            <div className={`${className}__input`}>
                <InputLabel label="Enter the first keywords" type="basic" />
            </div>
            <div className={`${className}__button`}>
                {/* TODO re-do hover */}
                <SimpleButton title="SEARCH" />
            </div>
        </div>
    );
};

export default DiscoverySearch;
