import React from 'react';
import { shallow } from 'enzyme';
import SmallCard, { SmallCardProps } from '../SmallCard';

const happyProps: SmallCardProps = {
    image: 'image',
    time: 'time',
    title: 'title',
    firstItem: false,
};

describe('SmallCard component', () => {
    it('Should not have firstItem', () => {
        const wrapper = shallow(<SmallCard {...happyProps} />);
        expect(wrapper.find('.small-card').hasClass('-firstItem')).toBeFalsy();
    });
});
