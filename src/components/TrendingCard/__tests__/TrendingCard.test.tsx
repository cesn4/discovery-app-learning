import React from 'react';
import { shallow } from 'enzyme';
import TrendingCard, { TrendingCardProps } from '../TrendingCard';
import PostInfo from '~/components/PostInfo';

const subtitleProp = 'Subtitle';
const primaryProp = 'Primary Text';
const testImage = '~/assets/image.jpg';
const testTime = 'Test time';

const HappyProps: TrendingCardProps = {
    image: testImage,
    subtitle: subtitleProp,
    primaryText: primaryProp,
    time: testTime,
};

describe('TrendingCard component', () => {
    it('Should render image', () => {
        const wrapper = shallow(<TrendingCard {...HappyProps} />);
        expect(wrapper.find('img').prop('src')).toEqual(testImage);
    });

    it('Should render PostInfo component', () => {
        const wrapper = shallow(<TrendingCard {...HappyProps} />);
        expect(wrapper.find('.trending-card__content').text()).toBeTruthy();
    });
});
