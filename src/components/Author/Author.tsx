import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Author.scss';

const Author: FunctionComponent<AuthorProps> = ({
    image,
    name,
    big = undefined,
}: AuthorProps) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'author';
    return (
        <div className={className}>
            <img
                className={classNames(`${className}__image`, { '-big': big })}
                src={image}
            ></img>
            <span
                className={classNames(`${className}__author-name`, {
                    '-big': big,
                })}
            >
                {name}
            </span>
        </div>
    );
};

interface AuthorProps {
    image: string;
    name?: string;
    big?: boolean;
}

export default Author;
