import React, { FunctionComponent } from 'react';

import '~/assets/img/time.png';
import './Time.scss';

const Time: FunctionComponent<TimeProps> = ({ text }: TimeProps) => {
    return (
        <div className='time'>
            <i className="time__clock"></i>
            <span className="time__clock-time">{text}</span>
        </div>
    );
};

interface TimeProps {
    text: string;
};

export default Time;
