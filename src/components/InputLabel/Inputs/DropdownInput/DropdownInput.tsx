import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import './DropdownInput.scss';

const DropdownInput: FunctionComponent<DropdownInputProps> = ({
    label,
    list,
}: DropdownInputProps) => {
    const className = 'dropdown-input';
    const backUpList = [{ value: 'error', label: 'No informationa available' }];
    const renderList = list ? (
        <Select options={list} classNamePrefix="react-select" />
    ) : (
        <Select options={backUpList} classNamePrefix="react-select" />
    );
    return (
        <div className={className}>
            <span className={`${className}__label`}>{label}</span>
            {renderList}
        </div>
    );
};

interface DropdownInputProps {
    label?: string;
    list?: Array<ListItems>;
}

export interface ListItems {
    value: string;
    label: string;
}

export default DropdownInput;
