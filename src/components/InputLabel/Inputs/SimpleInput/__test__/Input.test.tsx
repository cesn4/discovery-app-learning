import React from 'react';
import { shallow } from 'enzyme';
import SimpleInput, { SimpleInputProps } from '../SimpleInput';

const labelTest = 'label Test';
const placeholderTest = 'placeholder Test';

const HappyProps: SimpleInputProps = {
    label: labelTest,
    placeholder: placeholderTest,
};

describe('SimpleInput component', () => {
    it('Input should not render search class if search prop is not passed', () => {
        const wrapper = shallow(<SimpleInput {...HappyProps} />);
        expect(wrapper.find('.input').hasClass('-search')).toBeFalsy();
        expect(wrapper.find('.input__box').hasClass('-search')).toBeFalsy();
        expect(wrapper.find('.input__anchor').hasClass('-search')).toBeFalsy();
        expect(wrapper.find('.input__button').hasClass('-search')).toBeFalsy();
        expect(wrapper.find('.input__label').hasClass('-search')).toBeFalsy();
    });

    it('Input should render search class if search prop is passed', () => {
        const wrapper = shallow(<SimpleInput {...HappyProps} search />);
        expect(wrapper.find('.input').hasClass('-search')).toBeTruthy();
        expect(wrapper.find('.input__box').hasClass('-search')).toBeTruthy();
        expect(wrapper.find('.input__anchor').hasClass('-search')).toBeTruthy();
        expect(wrapper.find('.input__button').hasClass('-search')).toBeTruthy();
        expect(wrapper.find('.input__label').hasClass('-search')).toBeTruthy();
    });

    it('Should render Input label', () => {
        const wrapper = shallow(<SimpleInput {...HappyProps} />);
        expect(wrapper.find('.input__label').text()).toBe(labelTest);
    });

    it('Should render Input placeholder text', () => {
        const wrapper = shallow(<SimpleInput {...HappyProps} />);
        expect(wrapper.find('.input__text').prop('placeholder')).toBe(
            placeholderTest
        );
    });
});
