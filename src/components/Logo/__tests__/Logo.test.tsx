import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo';

describe('Logo component', () => {
    it('Should not have light if light props are not passed', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper.find('.logo').hasClass('-light')).toBeFalsy();
    });

    it('Should not have accent if accent props are not passed', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper.find('.logo').hasClass('-accent')).toBeFalsy();
    });
});
