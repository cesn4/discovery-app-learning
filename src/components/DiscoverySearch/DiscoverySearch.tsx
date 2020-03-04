import React, { FunctionComponent } from 'react';

import InputLabel from '~/components/InputLabel';
import SimpleButton from '~/components/SimpleButton';

import './DiscoverySearch.scss';

const DiscoverySearch: FunctionComponent = () => {
    const className = 'discovery-search';
    return (
        <div className={className}>
            <div className={`${className}__input-dropdown`}>
                <InputLabel name="dropdown" label="Select date" />
            </div>
            <div className={`${className}__input`}>
                <InputLabel label="Enter the first keywords" name="basic" />
            </div>
            <div className={`${className}__button`}>
                {/* TODO re-do hover */}
                <SimpleButton title="SEARCH" />
            </div>
        </div>
    );
};

export default DiscoverySearch;
