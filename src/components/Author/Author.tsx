import React, { FunctionComponent } from 'react';

import './Author.scss';

const Author: FunctionComponent<AuthorProps> = ({
    image,
    name,
}: AuthorProps) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'author';
    return (
        <div className={className}>
            <img className={`${className}__image`} src={image}></img>
            <span className={`${className}__author-name`}>{name}</span>
        </div>
    );
};

interface AuthorProps {
    image: string;
    name: string;
}

export default Author;
