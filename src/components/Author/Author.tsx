import React, { FunctionComponent } from 'react';

import './Author.scss';

const Author: FunctionComponent<AuthorProps> = ({ image }: AuthorProps) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'author';
    return (
        <div className={className}>
            <img className={`${className}__image`} src={image}></img>
        </div>
    );
};

interface AuthorProps {
    image: string;
}

export default Author;
