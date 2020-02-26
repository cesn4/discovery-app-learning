import React from 'react';
import { shallow } from 'enzyme';
import Video from '~/components/Video';

const testURL = '#';

describe('Video component', () => {
    it('Should render video URL', () => {
        const wrapper = shallow(<Video url={testURL} />);
        expect(wrapper.find('.video__react-player').prop('url')).toEqual(
            testURL
        );
    });
});
