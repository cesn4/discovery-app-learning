import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import '~/assets/img/time.png';
import './Time.scss';

const Time: FunctionComponent<TimeProps> = ({
    text,
    marginless = false,
}: TimeProps) => {
    return (
        <div className={classNames('time', { '-marginless': marginless })}>
            <i className="time__clock"></i>
            <span className="time__clock-time">{text}</span>
        </div>
    );
};

interface TimeProps {
    text: string;
    marginless?: boolean;
}

export default Time;
