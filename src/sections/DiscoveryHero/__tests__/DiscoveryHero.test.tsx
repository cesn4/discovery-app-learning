import React from 'react';
import { shallow } from 'enzyme';
import DiscoveryHero, { DiscoveryHeroProps } from '../DiscoveryHero';

const testString = 'Test String';
const testBackground = 'Background Test';

const HappyProps: DiscoveryHeroProps = {
    background: testBackground,
    title: testString,
    subtitle: testString,
    author: testString,
};

describe('DiscoveryHero component', () => {
    it('Should render Discovery background', () => {
        const wrapper = shallow(<DiscoveryHero {...HappyProps} />);
        expect(wrapper.find('DiscoveryTitle').prop('title')).toEqual(
            testString
        );
    });
});
