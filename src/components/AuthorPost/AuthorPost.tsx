import React, { FunctionComponent } from 'react';

import Time from '~/components/Time';
import Author from '~/components/Author';

import './AuthorPost.scss';

const AuthorPost: FunctionComponent<AuthorPostProps> = ({
    name,
    image,
    post,
    time,
}: AuthorPostProps) => {
    const className = 'author-post';
    return (
        <div className={className}>
            <Author big image={image} name={name} />
            <p className={`${className}__post`}>{post}</p>
            <Time text={time} />
        </div>
    );
};

export interface AuthorPostProps {
    name: string;
    image: string;
    post: string;
    time: string;
}

export default AuthorPost;
