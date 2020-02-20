import React from 'react';
import { shallow } from 'enzyme';
import AuthorPost, { AuthorPostProps } from '../AuthorPost';
import Author from '~/components/Author';

const authorTest = 'Name';
const testImage = '~/assets/image.jpg';
const postTest = 'Post Test';
const timeTest = 'Time Test';

const happyProps: AuthorPostProps = {
    name: authorTest,
    image: testImage,
    post: postTest,
    time: timeTest,
};

describe('AuthorPost component', () => {
    it('Should render image', () => {
        const wrapper = shallow(<AuthorPost {...happyProps} />);
        expect(wrapper.find('img').prop('src')).toEqual(testImage);
    });

    it('Should render Author name', () => {
        const wrapper = shallow(<AuthorPost {...happyProps} />);
        expect(wrapper.find('.author__author-name')).toEqual(authorTest);
    });
});
