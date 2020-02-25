import React from 'react';
import { shallow } from 'enzyme';
import Author, { AuthorProps } from '../Author';

const authorTest = 'Name';
const testImage = '~/assets/image.jpg';

const HappyProps: AuthorProps = {
    image: testImage,
    name: authorTest,
};

describe('Author component', () => {
    it(' Image should not have big if big prop is not passed', () => {
        const wrapper = shallow(<Author {...HappyProps} />);
        expect(wrapper.find('.author__image').hasClass('-big')).toBeFalsy();
    });

    it(' Image should have big if big prop is passed', () => {
        const wrapper = shallow(<Author {...HappyProps} big />);
        expect(wrapper.find('.author__image').hasClass('-big')).toBeTruthy();
    });

    it('Author name should not have big if big prop is not passed', () => {
        const wrapper = shallow(<Author {...HappyProps} />);
        expect(
            wrapper.find('.author__author-name').hasClass('-big')
        ).toBeFalsy();
    });

    it('Author name should have big if big prop is passed', () => {
        const wrapper = shallow(<Author {...HappyProps} big />);
        expect(
            wrapper.find('.author__author-name').hasClass('-big')
        ).toBeTruthy();
    });

    it('Should render image', () => {
        const wrapper = shallow(<Author {...HappyProps} />);
        expect(wrapper.find('img').prop('src')).toEqual(testImage);
    });

    it('Should render Author name', () => {
        const wrapper = shallow(<Author {...HappyProps} />);
        expect(wrapper.find('.author__author-name').text()).toEqual(authorTest);
    });
});
