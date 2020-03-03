import React, { FunctionComponent } from 'react';

import InputDropdown from '~/components/InputDropdown';
import Input from '~/components/Input';
import SimpleButton from '~/components/SimpleButton';

import './DiscoverySearch.scss';

const DiscoverySearch: FunctionComponent = () => {
    const className = 'discovery-search';
    return (
        <div className={className}>
            <div className={`${className}__input-dropdown`}>
                <InputDropdown title="Select date" />
            </div>
            <div className={`${className}__input`}>
                <Input search label="Enter the first keywords" />
            </div>
            <div className={`${className}__button`}>
                {/* TODO re-do hover */}
                <SimpleButton title="SEARCH" />
            </div>
        </div>
    );
};

export default DiscoverySearch;
