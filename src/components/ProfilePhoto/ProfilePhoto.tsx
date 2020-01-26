import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import woman from '~/assets/img/woman.png';
import './ProfilePhoto.scss';

const ProfilePhoto: FunctionComponent<ProfilePhotoProps> = ({ medium = false }: ProfilePhotoProps) => {
    return (
        <div className="profile-photo">
            <img src={woman} className={classNames('profile-photo__img', { '-medium': medium })} />
        </div>
    );
};

interface ProfilePhotoProps {
    medium?: boolean;
}

export default ProfilePhoto;
