import React from 'react';
import { shallow } from 'enzyme';

import AuthorNotes, { AuthorNotesProps } from '../AuthorNotes';
import Author from '~/components/Author';
import Article from '~/components/Article';

const titleTest = 'Title test';
const postTest = 'Post test';
const testImage = '~/assets/image.jpg';
const timeTest = 'Time test';

const HappyProps: AuthorNotesProps = {
    image: testImage,
    title: titleTest,
    post: postTest,
    time: timeTest,
};

describe('Article', () => {
    it('Should render image', () => {
        const wrapper = shallow(<AuthorNotes {...HappyProps} />);
        expect(wrapper.find(Author).prop('image')).toEqual(testImage);
    });
    it('Should render title', () => {
        const wrapper = shallow(<AuthorNotes {...HappyProps} />);
        expect(wrapper.find('.author-notes__title').text()).toEqual(titleTest);
    });
    it('Should render post', () => {
        const wrapper = shallow(<AuthorNotes {...HappyProps} />);
        expect(wrapper.find(Article).prop('content')).toEqual(postTest);
    });
    it('Should render time', () => {
        const wrapper = shallow(<AuthorNotes {...HappyProps} />);
        expect(wrapper.find(Article).prop('time')).toEqual(timeTest);
    });
});
