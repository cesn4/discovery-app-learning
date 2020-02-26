import React from 'react';
import { shallow } from 'enzyme';
import NextStory, { NextStoryProps } from '../NextStory';

const subtitleTest = 'Subtitle test';
const paragraphTest = 'Paragraph test';

const HappyProps: NextStoryProps = {
    subtitle: subtitleTest,
    paragraph: paragraphTest,
};

describe('NextStory component', () => {
    it('Should render subtitle', () => {
        const wrapper = shallow(<NextStory {...HappyProps} />);
        expect(wrapper.find('.next-story__subtitle').text()).toEqual(
            subtitleTest
        );
    });
    it('Should render paragraph', () => {
        const wrapper = shallow(<NextStory {...HappyProps} />);
        expect(wrapper.find('.next-story__paragraph').text()).toEqual(
            paragraphTest
        );
    });
});
