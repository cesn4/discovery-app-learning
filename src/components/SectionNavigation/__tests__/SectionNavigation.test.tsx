import React from 'react';
import { shallow } from 'enzyme';
import SectionNavigation from '../SectionNavigation';

const testTest = 'Test text';
const borderlessClass = '-borderless';

describe('SectionNavigation component', () => {
    it('Should render title', () => {
        const wrapper = shallow(<SectionNavigation title={testTest} />);
        expect(wrapper.find('.section-navigation__title').text()).toEqual(
            testTest
        );
    });

    it('Should render borderless', () => {
        const wrapper = shallow(
            <SectionNavigation title={testTest} borderless />
        );
        expect(
            wrapper.find('.section-navigation').hasClass(borderlessClass)
        ).toBeTruthy();
        expect(
            wrapper
                .find('.section-navigation__title-box')
                .hasClass(borderlessClass)
        ).toBeTruthy();
    });

    it('Should render with border', () => {
        const wrapper = shallow(<SectionNavigation title={testTest} />);
        expect(
            wrapper.find('.section-navigation').hasClass(borderlessClass)
        ).toBeFalsy();
        expect(
            wrapper
                .find('.section-navigation__title-box')
                .hasClass(borderlessClass)
        ).toBeFalsy();
    });
});
