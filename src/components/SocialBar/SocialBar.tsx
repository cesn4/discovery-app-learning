import React, { FunctionComponent } from 'react';

import SVGIcon from '~/components/SVGIcon';

import './SocialBar.scss';

const SocialBar: FunctionComponent = () => {
    return (
        <div className="social-bar">
            <a href="#" className="social-bar__icon">
                <SVGIcon name="instagram" />
            </a>
            <a href="#" className="social-bar__icon">
                <SVGIcon name="twitter" />
            </a>
            <a href="#" className="social-bar__icon">
                <SVGIcon name="facebook" />
            </a>
            <a href="#" className="social-bar__icon">
                <SVGIcon name="web" />
            </a>
        </div>
    );
};

export default SocialBar;
