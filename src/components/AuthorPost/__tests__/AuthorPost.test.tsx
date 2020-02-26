import React from 'react';
import { shallow } from 'enzyme';
import AuthorPost, { AuthorPostProps } from '../AuthorPost';
import Author from '~/components/Author';
import Time from '~/components/Time';

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
    it('Should render Author component', () => {
        const wrapper = shallow(<AuthorPost {...happyProps} />);
        expect(wrapper.find(Author)).toBeTruthy();
    });

    it('Should render Time component', () => {
        const wrapper = shallow(<AuthorPost {...happyProps} />);
        expect(wrapper.find(Time)).toBeTruthy();
    });

    it('Should render Author post', () => {
        const wrapper = shallow(<AuthorPost {...happyProps} />);
        expect(wrapper.find('.author-post__post').text()).toEqual(postTest);
    });
});
