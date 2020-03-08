import React from 'react';
import { shallow } from 'enzyme';
import DiscoveryHero from '../DiscoveryHero';

describe('DiscoveryHero component', () => {
    it('Should render Discovery background', () => {
        const testBackground = 'Background Test';
        const wrapper = shallow(<DiscoveryHero background={testBackground} />);
        expect(wrapper.find('.discovery-hero__content').prop('style')).toEqual({
            backgroundImage: 'url(Background Test)',
        });
    });
});
