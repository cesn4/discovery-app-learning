import React from 'react';
import { shallow } from 'enzyme';
import SidebarMenu from '../SidebarMenu';

const testHandler: VoidFunction = () => {
    return null;
};

describe('SidebarMenu component', () => {
    it('Should not have isOpen if isOpen prop is not passed', () => {
        const wrapper = shallow(<SidebarMenu closeSidebar={testHandler} />);
        expect(wrapper.find('.sidebar-menu').hasClass('is-open')).toBeFalsy();
    });

    it('Should not have isOpen if isOpen prop is not passed', () => {
        const wrapper = shallow(<SidebarMenu closeSidebar={testHandler} />);
        expect(
            wrapper.find('.sidebar-menu__backdraw').hasClass('-isOpen')
        ).toBeFalsy();
    });

    it('Should render Void function', () => {
        const wrapper = shallow(<SidebarMenu closeSidebar={testHandler} />);
        expect(wrapper.find('button').prop('onClick')).toEqual(testHandler);
    });

});
