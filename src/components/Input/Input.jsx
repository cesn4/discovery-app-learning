import React from 'react';

import send from '~/assets/img/send.png';
import './Input.scss';

const Input = () => {
    return (
        <div className="input">
            <div className="input__box">
                <input className="input__text" placeholder="Email"/>
                <a href="#" className="input__anchor">
                    <div className="input__button">
                        <img src={send} className="input__button-img"/>
                    </div>
                </a>
            </div>
            <span className="input__input-afterline">Stay in touch with us for the freshest products!</span>
        </div>
    );
};

export default Input;
