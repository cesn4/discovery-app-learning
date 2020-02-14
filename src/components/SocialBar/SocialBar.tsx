import React, { FunctionComponent } from 'react';

import Icon from '~/components/Icons';

import './SocialBar.scss';

const SocialBar: FunctionComponent = () => {
    return (
        <div className="social-bar">
            <a href="#" className="social-bar__icon">
                <Icon name="instagram" />
            </a>
            <a href="#" className="social-bar__icon">
                <Icon name="twitter" />
            </a>
            <a href="#" className="social-bar__icon">
                <Icon name="facebook" />
            </a>
            <a href="#" className="social-bar__icon">
                <Icon name="web" />
            </a>
        </div>
    );
};

export default SocialBar;
