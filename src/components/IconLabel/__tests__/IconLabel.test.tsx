import React from 'react';
import { shallow } from 'enzyme';
import IconLabel, { IconLabelProps } from '../IconLabel';
import Icon from '~/components/Icons';

const labelTest = 'Test label';
const nameTest = 'facebook';

const HappyProps: IconLabelProps = {
    label: labelTest,
    name: nameTest,
};

describe('IconLabel component', () => {
    it('Should render Icon Label', () => {
        const wrapper = shallow(<IconLabel {...HappyProps} />);
        expect(wrapper.find('.icon-label__label').text()).toEqual(labelTest);
    });

    it('Should render Icon componenet', () => {
        const wrapper = shallow(<IconLabel {...HappyProps} />);
        expect(wrapper.find(Icon).prop('name')).toEqual(nameTest);
    });
});
