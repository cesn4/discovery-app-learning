import React from 'react';
import { shallow } from 'enzyme';
import NavigationItem, { NavigationItemProps } from '../NavigationItem';

import ProfilePhoto from '~/components/ProfilePhoto';

const hrefTest = '#';
const titleTest = 'Title Test';
const testIcon = '~/assets/image.jpg';

const HappyProps: NavigationItemProps = {
    href: hrefTest,
    title: titleTest,
    icon: testIcon,
};

describe('NavigationItem component', () => {
    it('Should not have ProfilePhoto if Profile prop is not passed', () => {
        const wrapper = shallow(<NavigationItem {...HappyProps} />);
        expect(
            wrapper.find('.navigation-item__icon').hasClass('-profile')
        ).toBeFalsy();
    });

    it('Should have ProfilePhoto if Profile prop is passed', () => {
        const wrapper = shallow(<NavigationItem {...HappyProps} profile />);
        expect(
            wrapper.find('[prop-test="propTest"]').hasClass('-profile')
        ).toBeTruthy();
    });

    it('Should render Icon', () => {
        const wrapper = shallow(<NavigationItem {...HappyProps} />);
        expect(wrapper.find('img').prop('src')).toEqual(testIcon);
    });

    it('Should render title', () => {
        const wrapper = shallow(<NavigationItem {...HappyProps} />);
        expect(wrapper.find('.navigation-item__title').text()).toEqual(
            titleTest
        );
    });

    it('Should not have active if active prop is not passed', () => {
        const wrapper = shallow(<NavigationItem {...HappyProps} />);
        expect(
            wrapper.find('.navigation-item__title').hasClass('-active')
        ).toBeFalsy();
    });

    it('Should have active if active prop is passed', () => {
        const wrapper = shallow(<NavigationItem {...HappyProps} active />);
        expect(
            wrapper.find('.navigation-item__title').hasClass('-active')
        ).toBeTruthy();
    });
});
