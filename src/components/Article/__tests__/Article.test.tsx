import React from 'react';
import { shallow } from 'enzyme';
import Article, { ArticleProps } from '../Article';

const titleTest = 'Title test';
const contentTest = 'Content test';

const HappyProps: ArticleProps = {
    title: titleTest,
    content: contentTest,
}

describe('Time component', () => {
    it('Should render text', () => {
        const wrapper = shallow(<Article {...HappyProps} />);
        expect(wrapper.find('.article__title').text()).toEqual(titleTest);
    });
    it('Should render text', () => {
        const wrapper = shallow(<Article {...HappyProps} />);
        expect(wrapper.find('.article__content').text()).toEqual(contentTest);
    });
});
