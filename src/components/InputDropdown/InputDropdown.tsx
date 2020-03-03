import React, { FunctionComponent } from 'react';
import InputLabel from '~/components/InputLabel';

import './InputDropdown.scss';

const InputDropdown: FunctionComponent = () => {
    const className = 'input-dropdown';
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className={className}>
            <span className={`${className}__label`}>Select date</span>
            {/* TODO change font family */}
            <InputLabel options={options} />
        </div>
    );
};

export default InputDropdown;
