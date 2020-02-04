import React, { FunctionComponent } from 'react';

import './FooterList.scss';

const FooterList: FunctionComponent<FooterListProps> = ({
    first,
    second,
    third,
    fourth,
    href = '#',
}: FooterListProps) => {
    return (
        <div className="footer-list">
            <ul className="footer-list__column">
                <a className="footer-list__item" href={href}>
                    {first}
                </a>
                <a className="footer-list__item" href={href}>
                    {second}
                </a>
                <a className="footer-list__item" href={href}>
                    {third}
                </a>
                <a className="footer-list__item" href={href}>
                    {fourth}
                </a>
            </ul>
        </div>
    );
};

interface FooterListProps {
    first: string;
    second: string;
    third: string;
    fourth: string;
    href?: string;
}

export default FooterList;
