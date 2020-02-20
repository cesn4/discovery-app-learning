import React from 'react';
import { shallow } from 'enzyme';
import IconLabel, { IconLabelProps } from '../IconLabel';
import Icon from '~/components/Icons';

const labelTest = 'Test label';

const HappyProps: IconLabelProps = {
    label: labelTest,
    name: 'facebook',
};

describe('IconLabel component', () => {
    it('Should render Icon Label', () => {
        const wrapper = shallow(<IconLabel {...HappyProps} />);
        expect(wrapper.find('.icon-label__label').text()).toEqual(labelTest);
    });

    it('Should render Icon componenet', () => {
        const wrapper = shallow(<IconLabel {...HappyProps} />);
        expect(wrapper.find(Icon)).toBeTruthy();
    });
});
