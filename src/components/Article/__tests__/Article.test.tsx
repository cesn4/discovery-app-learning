import React from 'react';
import { shallow } from 'enzyme';
import Article, { ArticleProps } from '../Article';

const titleTest = 'Title test';
const contentTest = 'Content test';

const HappyProps: ArticleProps = {
    title: titleTest,
    content: contentTest,
};

describe('Article', () => {
    it('Should render text', () => {
        const wrapper = shallow(<Article {...HappyProps} />);
        expect(wrapper.find('.article__title').text()).toEqual(titleTest);
    });
    it('Should render content', () => {
        const wrapper = shallow(<Article {...HappyProps} />);
        expect(wrapper.find('.article__content').text()).toEqual(contentTest);
    });

    it('Should not render notes class if notes prop is not passed', () => {
        const wrapper = shallow(<Article {...HappyProps} />);
        expect(wrapper.find('.article__box').hasClass('-notes')).toBeFalsy();
    });

    it('Should render notes class if notes prop is passed', () => {
        const wrapper = shallow(<Article {...HappyProps} notes />);
        expect(wrapper.find('.article__box').hasClass('-notes')).toBeTruthy();
    });
});
