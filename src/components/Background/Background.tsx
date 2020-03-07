import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import SimpleButton from '~/components/SimpleButton';
import { fetchHeroBackground } from '~/utils/fetchHeroBackground';

import '~/assets/mount.jpg';
import './Background.scss';

const Background: FunctionComponent<MappedProps> = ({
    heroBackground,
}: MappedProps) => {
    let backgroundTitle = [''];
    let backgroundSubtitle = [''];
    let backgroundParagraph = [''];

    fetchHeroBackground();
    console.log(heroBackground);
    if (heroBackground) {
        backgroundTitle = Object.keys(heroBackground[0].title);
        backgroundSubtitle = Object.keys(heroBackground[0].subtitle);
        backgroundParagraph = Object.keys(heroBackground[0].paragraph);
    }
    return (
        <div className="background">
            <div className="background__news-box">
                <div className="background__title-box">
                    <span className="background_title">{backgroundTitle}</span>
                </div>
                <span className="background__subtitle">
                    {backgroundSubtitle}
                </span>
                <p className="background__paragraph">{backgroundParagraph}</p>
                <SimpleButton title="LEARN MORE" />
            </div>
        </div>
    );
};

const mapStateToProps = (state: ApplicationState): MappedProps => {
    return {
        heroBackground: state.heroBackground,
    };
};

interface ApplicationState {
    heroBackground: Array<HeroBackgroundItems>;
}

interface MappedProps {
    heroBackground: Array<HeroBackgroundItems>;
}

interface HeroBackgroundItems {
    title: string;
    subtitle: string;
    paragraph: string;
}

export default connect(mapStateToProps)(Background);
