import React from 'react';
import { shallow } from 'enzyme';
import SimpleButton from '../SimpleButton';

describe('Time component', () => {
    it('Should render title', () => {
        const testTest = 'Test text';
        const wrapper = shallow(<SimpleButton title={testTest} />);
        expect(wrapper.find('.button__title').text()).toEqual(testTest);
    });
});
