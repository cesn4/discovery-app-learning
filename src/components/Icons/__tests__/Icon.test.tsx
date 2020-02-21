import React from 'react';
import { shallow } from 'enzyme';
import Icon, { IconProps } from '../Icon';
import SVGFacebook from '~/components/Icons/assets/SVGFacebook';

const testName = 'facebook';
const testColor = '#fff';
const testSize = 16;
const testClassName = 'testClassName';

const HappyProps: IconProps = {
    name: testName,
    color: testColor,
    size: testSize,
    className: testClassName,
};

describe('Icon', () => {
    it('Should render text', () => {
        const wrapper = shallow(<Icon {...HappyProps} />);
        expect(wrapper.find('.icon')).toBeTruthy();
    });

    it('Should have className', () => {
        const wrapper = shallow(<Icon {...HappyProps} />);
        expect(wrapper.find('.icon').hasClass(testClassName)).toBeTruthy();
    });

    it('Should render Icon', () => {
        const wrapper = shallow(<Icon {...HappyProps} />);
        expect(wrapper.find(SVGFacebook)).toBeTruthy();
    });
});
