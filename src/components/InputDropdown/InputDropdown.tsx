import React, { FunctionComponent } from 'react';
import InputLabel from '~/components/InputLabel';

import './InputDropdown.scss';

const InputDropdown: FunctionComponent<InputDropdownProps> = ({
    title,
}: InputDropdownProps) => {
    const className = 'input-dropdown';
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className={className}>
            <span className={`${className}__label`}>{title}</span>
            {/* TODO change font family */}
            <InputLabel options={options} />
        </div>
    );
};

interface InputDropdownProps {
    title: string;
}

export default InputDropdown;
