import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Time from '~/components/Time';
import Author from '~/components/Author';

import './AuthorPost.scss';

const AuthorPost: FunctionComponent<AuthorPostProps> = ({
    name,
    image,
    post,
    time,
    note = undefined,
}: AuthorPostProps) => {
    const className = 'author-post';
    return (
        <div className={className}>
            <Author big image={image} name={name} />
            <p className={classNames(`${className}__post`, { '-note': note })}>
                {post}
            </p>
            <Time text={time} />
        </div>
    );
};

export interface AuthorPostProps {
    name?: string;
    image?: string;
    post: string;
    time: string;
    note?: boolean;
}

export default AuthorPost;
