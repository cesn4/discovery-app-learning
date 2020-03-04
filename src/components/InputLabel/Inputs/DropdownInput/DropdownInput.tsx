import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import './DropdownInput.scss';

const DropdownInput: FunctionComponent<DropdownINputProps> = ({
    label,
}: DropdownINputProps) => {
    const className = 'dropdown-input';
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

interface DropdownINputProps {
    label?: string;
}

export default DropdownInput;
