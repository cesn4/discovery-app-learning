import React from 'react';
import { shallow } from 'enzyme';
import ProfilePhoto from '../ProfilePhoto';

describe('ProfilePhoto component', () => {
    it('Should not have medium if medium prop is not passed', () => {
        const wrapper = shallow(<ProfilePhoto />);
        expect(
            wrapper.find('.profile-photo__img').hasClass('-medium')
        ).toBeFalsy();
    });

    it('Should have medium if medium prop is passed', () => {
        const wrapper = shallow(<ProfilePhoto medium />);
        expect(
            wrapper.find('.profile-photo__img').hasClass('-medium')
        ).toBeTruthy();
    });
});
