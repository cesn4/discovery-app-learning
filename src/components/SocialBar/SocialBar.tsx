import React, { FunctionComponent } from 'react';

import instagram from '~/assets/img/instagram.png';
import facebook from '~/assets/img/facebook.png';
import twitter from '~/assets/img/twitter.png';
import web from '~/assets/img/web.png';

import './SocialBar.scss';

const Media: FunctionComponent = () => {
    return (
        <div className="media">
            <a href="#">
                <img src={instagram} alt="" className="media__img" />
            </a>
            <a href="#">
                <img src={twitter} alt="" className="media__img" />
            </a>
            <a href="#">
                <img src={facebook} alt="" className="media__img" />
            </a>
            <a href="#">
                <img src={web} alt="" className="media__img" />
            </a>
        </div>
    );
};

export default Media;
