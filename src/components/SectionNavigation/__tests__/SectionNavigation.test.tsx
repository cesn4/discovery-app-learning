import React from 'react';
import { shallow } from 'enzyme';
import SectionNavigation from '../SectionNavigation';

describe('SectionNavigation component', () => {
    it('Should render title', () => {
        const testTest = 'Test text';
        const wrapper = shallow(<SectionNavigation title={testTest} />);
        expect(wrapper.find('.section-navigation__title').text()).toEqual(
            testTest
        );
    });
});
