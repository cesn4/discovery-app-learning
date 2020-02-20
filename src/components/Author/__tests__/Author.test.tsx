import React from 'react';
import { shallow } from 'enzyme';
import Author, { AuthorProps } from '../Author';

const authorTest = 'Name';
const testImage = '~/assets/image.jpg';

const happyProps: AuthorProps = {
    image: testImage,
    name: authorTest,
};

describe('SmallCard component', () => {
    it('Should not have big if big prop is not passed', () => {
        const wrapper = shallow(<Author {...happyProps} />);
        expect(wrapper.find('.author__image').hasClass('-big')).toBeFalsy();
    });

    it('Should not have big if big prop is not passed', () => {
        const wrapper = shallow(<Author {...happyProps} />);
        expect(
            wrapper.find('.author__author-name').hasClass('-big')
        ).toBeFalsy();
    });

    it('Should render image', () => {
        const wrapper = shallow(<Author {...happyProps} />);
        expect(wrapper.find('img').prop('src')).toEqual(testImage);
    });

    it('Should render Author name', () => {
        const wrapper = shallow(<Author {...happyProps} />);
        expect(wrapper.find('.author__author-name')).toEqual(authorTest);
    });
});
