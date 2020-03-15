import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo';

const testTitle = 'test';

const HappyProps = {
    title: testTitle,
};

describe('Logo component', () => {
    it('Should not have light if light props are not passed', () => {
        const wrapper = shallow(<Logo {...HappyProps} />);
        expect(wrapper.find('.logo').hasClass('-light')).toBeFalsy();
    });

    it('Should have light if light prop is passed', () => {
        const wrapper = shallow(<Logo light {...HappyProps} />);
        expect(wrapper.find('.logo').hasClass('-light')).toBeTruthy();
    });

    it('Should not have accent if accent props are not passed', () => {
        const wrapper = shallow(<Logo {...HappyProps} />);
        expect(wrapper.find('.logo').hasClass('-accent')).toBeFalsy();
    });

    it('Should have accent if accent prop is passed', () => {
        const wrapper = shallow(<Logo accent {...HappyProps} />);
        expect(wrapper.find('.logo').hasClass('-accent')).toBeTruthy();
    });
});
