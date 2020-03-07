import React, { FunctionComponent } from 'react';

import SimpleButton from '~/components/SimpleButton';

import '~/assets/mount.jpg';
import './Background.scss';

const Background: FunctionComponent<BackgroundProps> = ({
    title,
    subtitle,
    paragraph,
}: BackgroundProps) => {
    return (
        <div className="background">
            <div className="background__news-box">
                <div className="background__title-box">
                    <span className="background_title">{title}</span>
                </div>
                <span className="background__subtitle">{subtitle}</span>
                <p className="background__paragraph">{paragraph}</p>
                <SimpleButton title="LEARN MORE" />
            </div>
        </div>
    );
};

interface BackgroundProps {
    title: string;
    subtitle: string;
    paragraph: string;
}

export default Background;
