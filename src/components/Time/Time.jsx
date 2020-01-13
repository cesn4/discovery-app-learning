import React from 'react';
import PropTypes from 'prop-types';

import '~/assets/img/time.png';
import './Time.scss';

const Time = ({ timeText }) => {
    return (
        <div className="time">
            <i className="time__clock"></i>
            <span className="time__clock-time">{timeText}</span>
        </div>
    );
};

Time.propTypes = {
    timeText: PropTypes.string.isRequired
};

export default Time;
