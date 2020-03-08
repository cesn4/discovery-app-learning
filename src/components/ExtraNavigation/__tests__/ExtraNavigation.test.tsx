import ExtraNavigation, {
    ExtraNavigationProps,
} from '~/components/ExtraNavigation';

import React from 'react';
import { shallow } from 'enzyme';

const testLabel = 'Test Label';
const testHref = '#';

const HappyProps: ExtraNavigationProps = {
    label: testLabel,
    backHref: testHref,
    homeHref: testHref,
};

describe('ExtraNavigation component', () => {
    it('Should render ExtraNavigation Label', () => {
        const wrapper = shallow(<ExtraNavigation {...HappyProps} />);
        expect(wrapper.find('.extra-navigation__label').text()).toBe(testLabel);
    });

    it('Should render ExtraNavigation back Icon href', () => {
        const wrapper = shallow(<ExtraNavigation {...HappyProps} />);
        expect(
            wrapper.find('.extra-navigation__back-anchor').prop('href')
        ).toBe(testHref);
    });

    it('Should render ExtraNavigation Home icon href', () => {
        const wrapper = shallow(<ExtraNavigation {...HappyProps} />);
        expect(
            wrapper.find('.extra-navigation__home-anchor').prop('href')
        ).toBe(testHref);
    });
});
