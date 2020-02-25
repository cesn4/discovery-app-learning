import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../MenuItem';

const labelTest = 'Label Test';

describe('MenuItem component', () => {
    it('Should not have active if active prop is not passed', () => {
        const wrapper = shallow(<MenuItem label={labelTest} />);
        expect(
            wrapper.find('.menu-item__label').hasClass('-active')
        ).toBeFalsy();
    });

    it('Should render MenuItem label', () => {
        const wrapper = shallow(<MenuItem label={labelTest} />);
        expect(wrapper.find('.menu-item__label').text()).toEqual(labelTest);
    });

    it('Should not have DropdownMenu if dropdownMenu prop is not passed', () => {
        const wrapper = shallow(<MenuItem label={labelTest} />);
        expect(wrapper.find('.menu-item').prop('dropdownMenu')).toBeFalsy();
    });
});
