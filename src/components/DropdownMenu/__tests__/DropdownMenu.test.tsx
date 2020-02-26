import React from 'react';
import { shallow } from 'enzyme';
import DropdownMenu, { DropdownMenuProps } from '../DropdownMenu';
import NavigationItem from '~/components/NavigationItem';

const dropdownTest = ['Test-1', 'Test-2'];

const HappyProps: DropdownMenuProps = {
    dropdownMenu: dropdownTest,
};

describe('Dropdown component', () => {
    it('Should render dropdownMenu', () => {
        const wrapper = shallow(<DropdownMenu {...HappyProps} />);
        expect(wrapper.find(NavigationItem)).toBeTruthy();
    });
});
