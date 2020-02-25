import React from 'react';
import { shallow } from 'enzyme';
import FeaturedCard, { FeaturedCardProps } from '../FeaturedCard';
import PostInfo from '~/components/PostInfo';

const testImage = '~/assets/image.jpg';

const HappyProps: FeaturedCardProps = {
    time: 'Test time',
    theme: 'Test theme',
    title: 'Test title',
    paragraph: 'Test title',
    background: testImage,
};

describe('FeaturedCard', () => {
    it('Should not have firstItem if firstItem prop is not passed', () => {
        const wrapper = shallow(<FeaturedCard {...HappyProps} />);
        expect(
            wrapper.find('.featured-card').hasClass('-first-item')
        ).toBeFalsy();
    });

    it('Should have firstItem if firstItem prop is passed', () => {
        const wrapper = shallow(<FeaturedCard {...HappyProps} firstItem />);
        expect(
            wrapper.find('.featured-card').hasClass('-first-item')
        ).toBeTruthy();
    });

    it('Should not have lastItem if lastItem prop is not passed', () => {
        const wrapper = shallow(<FeaturedCard {...HappyProps} />);
        expect(
            wrapper.find('.featured-card').hasClass('-last-item')
        ).toBeFalsy();
    });

    it('Should have lastItem if lastItem prop is passed', () => {
        const wrapper = shallow(<FeaturedCard {...HappyProps} lastItem />);
        expect(
            wrapper.find('.featured-card').hasClass('-last-item')
        ).toBeTruthy();
    });

    it('Should render PostInfo component ', () => {
        const wrapper = shallow(<FeaturedCard {...HappyProps} />);
        expect(wrapper.find('.featured-card').text()).toBeTruthy();
    });
});
