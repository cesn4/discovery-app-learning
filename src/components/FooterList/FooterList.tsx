import React, { FunctionComponent, ReactChild } from 'react';

import './FooterList.scss';

const FooterList: FunctionComponent<FooterListProps> = ({
    list,
}: FooterListProps) => {
    const hardcodedList: Array<FooterList> = list;
    const renderList: Array<ReactChild> = hardcodedList.map(
        ({ label, href = '#' }: FooterList, index) => {
            return (
                <a
                    key={index.toString()}
                    href={href}
                    className="footer-list__item"
                >
                    {label}
                </a>
            );
        }
    );
    return (
        <div className="footer-list">
            <ul className="footer-list__column">{renderList}</ul>
        </div>
    );
};

interface FooterListProps {
    list: Array<FooterList>;
}

interface FooterList {
    label: string;
    href?: string;
}

export default FooterList;
