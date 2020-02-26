import React, { FunctionComponent } from 'react';
import Select from 'react-select';

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
            <Select options={options}></Select>
        </div>
    );
};

export default InputDropdown;
