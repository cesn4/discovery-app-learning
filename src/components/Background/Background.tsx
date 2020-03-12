import React, { FunctionComponent } from 'react';

import SimpleButton from '~/components/SimpleButton';

import '~/assets/mount.jpg';
import './Background.scss';

const Background: FunctionComponent<BackgroundProps> = ({
    title,
    subtitle,
    paragraph,
    background,
    href,
}: BackgroundProps) => {
    const styleBackground: FeaturedCardBackgroundObject = {
        backgroundImage: 'url(' + background + ')',
    };

    return (
        <div className="background" style={styleBackground}>
            <div className="background__news-box">
                <div className="background__title-box">
                    <span className="background_title">{title}</span>
                </div>
                <span className="background__subtitle">{subtitle}</span>
                <p className="background__paragraph">{paragraph}</p>
                <SimpleButton title="LEARN MORE" href={href} />
            </div>
        </div>
    );
};

interface BackgroundProps {
    title: string;
    subtitle: string;
    paragraph: string;
    background: string;
    href: string;
}

interface FeaturedCardBackgroundObject {
    backgroundImage: string;
}

export default Background;
