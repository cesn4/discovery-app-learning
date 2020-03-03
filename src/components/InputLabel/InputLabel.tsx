import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import './InputLabel.scss';

const InputLabel: FunctionComponent<InputLabelProps> = ({
    options,
}: InputLabelProps) => {
    const className = 'input-label';
    return (
        <div className={className}>
            <Select options={options} classNamePrefix="react-select" />
        </div>
    );
};

interface InputLabelProps {
    options: Array<ReactSelectOptionsProps>;
}

interface ReactSelectOptionsProps {
    value: string;
    label: string;
}

export default InputLabel;
