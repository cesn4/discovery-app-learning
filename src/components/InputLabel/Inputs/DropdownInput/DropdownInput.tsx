import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import './DropdownInput.scss';

const DropdownInput: FunctionComponent<DropdownInputProps> = ({
    label,
}: DropdownInputProps) => {
    const className = 'dropdown-input';
    // TODO make a props for this one ( react-select doesnt accept undefined )
    const list = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className={className}>
            <span className={`${className}__label`}>{label}</span>
            <Select options={list} classNamePrefix="react-select" />
        </div>
    );
};

interface DropdownInputProps {
    label?: string;
}

export default DropdownInput;
