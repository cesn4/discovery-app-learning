import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Icon from '~/components/Icons';

import './SimpleInput.scss';

const Input: FunctionComponent<SimpleInputProps> = ({
    search,
    label,
    placeholder,
}: SimpleInputProps) => {
    return (
        <div className={classNames('input', { '-search': search })}>
            <div className={classNames('input__box', { '-search': search })}>
                <input
                    className={classNames('input__text', { '-search': search })}
                    placeholder={placeholder}
                />
                <a
                    href="#"
                    className={classNames('input__anchor', {
                        '-search': search,
                    })}
                >
                    <div
                        className={classNames('input__button', {
                            '-search': search,
                        })}
                    >
                        <Icon name="send" color="#fff" />
                        {/* TODO use color declarations then merged */}
                    </div>
                </a>
            </div>
            <span className={classNames('input__label', { '-search': search })}>
                {label}
            </span>
        </div>
    );
};

export interface SimpleInputProps {
    search?: boolean;
    label?: string;
    placeholder?: string;
}

export default Input;
