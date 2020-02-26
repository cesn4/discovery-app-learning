import React from 'react';
import { shallow } from 'enzyme';
import FooterList from '../FooterList';

const footerListTest = [{ label: 'Test-1' }, { label: 'Test-2' }];

describe('FooterList component', () => {
    it('Should render Footerlist', () => {
        const wrapper = shallow(<FooterList list={footerListTest} />);
        expect(wrapper.find('.footer-list__column').text()).toBeTruthy();
    });
});
