import React from 'react';
import { shallow } from 'enzyme';
import SmallCard, { SmallCardProps } from '../SmallCard';

const testImage = '~/assets/image.jpg';

const happyProps: SmallCardProps = {
    image: testImage,
    time: 'time',
    title: 'title',
};

describe('SmallCard component', () => {
    it('Should not have firstItem if firstItem prop is not passed', () => {
        const wrapper = shallow(<SmallCard {...happyProps} />);
        expect(wrapper.find('.small-card').hasClass('-firstItem')).toBeFalsy();
    });

    it('Should render image', () => {
        const wrapper = shallow(<SmallCard {...happyProps} />);
        expect(wrapper.find('img').prop('src')).toEqual(testImage);
    });
});
