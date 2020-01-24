import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '~/assets/img/time.png';
import './Time.scss';

const Time = ({ text, marginless }) => {
    return (
        <div className={classNames('time', { '-marginless': marginless })}>
            <i className="time__clock"></i>
            <span className="time__clock-time">{text}</span>
        </div>
    );
};

Time.propTypes = {
    text: PropTypes.string.isRequired,
    marginless: PropTypes.bool
};

Time.defaultProps = {
    marginless: false
};

export default Time;
