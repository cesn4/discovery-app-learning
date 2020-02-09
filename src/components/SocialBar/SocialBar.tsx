import React, { FunctionComponent } from 'react';

import instagram from '~/assets/img/instagram.png';
import facebook from '~/assets/img/facebook.png';
import twitter from '~/assets/img/twitter.png';
import web from '~/assets/img/web.png';

import './SocialBar.scss';

const SocialBar: FunctionComponent = () => {
    return (
        <div className="social-bar">
            <a href="#">
                <img src={instagram} alt="" className="social-bar__img" />
            </a>
            <a href="#">
                <img src={twitter} alt="" className="social-bar__img" />
            </a>
            <a href="#">
                <img src={facebook} alt="" className="social-bar__img" />
            </a>
            <a href="#">
                <img src={web} alt="" className="social-bar__img" />
            </a>
        </div>
    );
};

export default SocialBar;
