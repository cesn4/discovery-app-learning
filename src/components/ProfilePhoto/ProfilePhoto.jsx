import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import woman from '~/assets/img/woman.png';
import './ProfilePhoto.scss';

const ProfilePhoto = ({ medium }) => {
    return (
        <div className="profile-photo">
            <img src={woman} className={classNames('profile-photo__img', { '-medium': medium })} />
        </div>
    );
};

ProfilePhoto.propTypes = {
    medium: PropTypes.bool
};

ProfilePhoto.defaultProps = {
    medium: false
};

export default ProfilePhoto;
