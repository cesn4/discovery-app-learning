import React, { FunctionComponent, ElementType } from 'react';

import DropdownInput from '~/components/InputLabel/Inputs/DropdownInput';
import SimpleInput from '~/components/InputLabel/Inputs/SimpleInput';

const InputLabel: FunctionComponent<InputLabelProps> = ({
    type,
    label,
    placeholder,
}: InputLabelProps) => {
    const className = 'input-label';
    const renderInput: ElementType = (type: InputType) => {
        switch (type) {
            case 'dropdown':
                return <DropdownInput label={label} />;
            case 'basic':
                return <SimpleInput label={label} search />;
            case 'button':
                return <SimpleInput label={label} placeholder={placeholder} />;
            default:
                return null;
        }
    };
    return <div className={className}>{renderInput(type)}</div>;
};

interface InputLabelProps {
    type: InputType;
    label?: string;
    placeholder?: string;
}

type InputType = 'basic' | 'dropdown' | 'button';

export default InputLabel;
