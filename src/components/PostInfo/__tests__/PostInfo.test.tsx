import React from 'react';
import { shallow } from 'enzyme';
import PostInfo, { PostInfoProps } from '../PostInfo';
import Time from '~/components/Time';
const testString = 'Test String';

const HappyProps: PostInfoProps = {
    title: testString,
    subtitle: testString,
    primaryText: testString,
};

describe('PostInfo component', () => {
    it('Should render title', () => {
        const wrapper = shallow(<PostInfo {...HappyProps} />);
        expect(wrapper.find('.post-info__title').text()).toEqual(testString);
    });

    it('Should render subtitle', () => {
        const wrapper = shallow(<PostInfo {...HappyProps} />);
        expect(wrapper.find('.post-info__subtitle').text()).toEqual(testString);
    });

    it('Should render primaryText', () => {
        const wrapper = shallow(<PostInfo {...HappyProps} />);
        expect(wrapper.find('.post-info__text').text()).toEqual(testString);
    });

    it('Should not have white if white props is not passed', () => {
        const wrapper = shallow(<PostInfo {...HappyProps} />);
        expect(wrapper.find('.post-info').hasClass('-white')).toBeFalsy();
        expect(
            wrapper.find('.post-info__title').hasClass('-white')
        ).toBeFalsy();
        expect(
            wrapper.find('.post-info__subtitle').hasClass('-white')
        ).toBeFalsy();
        expect(wrapper.find('.post-info__text').hasClass('-white')).toBeFalsy();
    });

    it('Should have white if white props is passed', () => {
        const wrapper = shallow(<PostInfo {...HappyProps} white />);
        expect(wrapper.find('.post-info').hasClass('-white')).toBeTruthy();
        expect(
            wrapper.find('.post-info__title').hasClass('-white')
        ).toBeTruthy();
        expect(
            wrapper.find('.post-info__subtitle').hasClass('-white')
        ).toBeTruthy();
        expect(
            wrapper.find('.post-info__text').hasClass('-white')
        ).toBeTruthy();
    });

    it('Should not render Time component if Time text prop is not passed', () => {
        const wrapper = shallow(<PostInfo {...HappyProps} />);
        expect(wrapper.find('.post-info').prop('text')).toBeFalsy();
    });
});
