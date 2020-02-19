import React from 'react';
import { shallow } from 'enzyme';
import SmallCard, { SmallCardProps } from '../SmallCard';
import PostInfo from '~/components/PostInfo';

const titleProp = 'Title';
const testImage = '~/assets/image.jpg';
const timeProp = 'Title';

const happyProps: SmallCardProps = {
    title: titleProp,
    image: testImage,
    time: timeProp,
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

    it('Should render PostInfo component', () => {
        const wrapper = shallow(<SmallCard {...happyProps} />);
        expect(wrapper.find(PostInfo)).toBeTruthy();
    });

    it('Should render PostInfo subtitle', () => {
        const wrapper = shallow(<SmallCard {...happyProps} />);
        expect(wrapper.find(PostInfo).prop('subtitle')).toEqual(titleProp);
    });

    it('Should render PostInfo time', () => {
        const wrapper = shallow(<SmallCard {...happyProps} />);
        expect(wrapper.find(PostInfo).prop('time')).toEqual(timeProp);
    });
});
