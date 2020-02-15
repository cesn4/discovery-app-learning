import React from 'react';
import { shallow } from 'enzyme';
import Time from '../Time';

describe('Time component', () => {
    it('Should render text', () => {
        const testTest = 'Test text';
        const wrapper = shallow(<Time text={testTest} />);
        expect(wrapper.find('.time__clock-time').text()).toEqual(testTest);
    });
});
