import React from 'react';
import { shallow } from 'enzyme';
import SidebarLauncher from '../SidebarLauncher';

const testHandler: VoidFunction = () => {
    return null;
};

describe('SidebarLauncher component', () => {
    it('Should render Void function', () => {
        const wrapper = shallow(<SidebarLauncher onClick={testHandler} />);
        expect(wrapper.find('button').prop('onClick')).toEqual(testHandler);
    });
});
