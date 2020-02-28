import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

// TODO change png files to svg //
import send from '~/assets/img/send.png';
import './Input.scss';

const Input: FunctionComponent<InputProps> = ({
    search,
    label,
    placeholder,
}: InputProps) => {
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
                        <img src={send} className="input__button-img" />
                    </div>
                </a>
            </div>
            <span className={classNames('input__label', { '-search': search })}>
                {label}
            </span>
        </div>
    );
};

export interface InputProps {
    search?: boolean;
    label?: string;
    placeholder?: string;
}

export default Input;
