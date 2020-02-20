import React, { FunctionComponent } from 'react';

import Icon from '~/components/Icons';

import './Time.scss';

const Time: FunctionComponent<TimeProps> = ({ text }: TimeProps) => {
    return (
        <div className="time">
            {/* TODO: replace hardcoded color value with a scss Colors import variable */}
            <Icon className="time__clock" name="time" color="#a6adb4" />
            <span className="time__clock-time">{text}</span>
        </div>
    );
};

interface TimeProps {
    text: string;
}

export default Time;
