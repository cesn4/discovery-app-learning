import React from 'react';
import { shallow } from 'enzyme';
import ExtraNavigation, {
    ExtraNavigationProps,
} from '~/components/ExtraNavigation';

const testLabel = 'Test Label';
const testHref = '#';

const HappyProps: ExtraNavigationProps = {
    label: testLabel,
    href: testHref,
};

describe('ExtraNavigatio component', () => {
    it('Should render ExtraNavigation Label', () => {
        const wrapper = shallow(<ExtraNavigation {...HappyProps} />);
        expect(wrapper.find('.extra-navigation__label').text()).toBe(testLabel);
    });

    it('Should render ExtraNavigation href', () => {
        const wrapper = shallow(<ExtraNavigation {...HappyProps} />);
        expect(
            wrapper.find('.extra-navigation__back-anchor').prop('href')
        ).toBe(testHref);
    });
});
