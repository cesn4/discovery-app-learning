import React from 'react';
import { shallow } from 'enzyme';
import DiscoveryLayout from '../DiscoveryLayout';

const contentTest = 'Content test';

describe('DiscoveryLayout component', () => {
    it('Should render dropdownMenu', () => {
        const wrapper = shallow(<DiscoveryLayout content={contentTest} />);
        expect(wrapper.find('.discovery-layout__content').text()).toContain(
            contentTest
        );
    });
});
