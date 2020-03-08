import React from 'react';
import { shallow } from 'enzyme';
import DropdownInput from '../DropdownInput';

const labelTest = 'label Test';

describe('Dropdown Input component', () => {
    it('Should render Input label', () => {
        const wrapper = shallow(<DropdownInput label={labelTest} />);
        expect(wrapper.find('.dropdown-input__label').text()).toBe(labelTest);
    });
});
