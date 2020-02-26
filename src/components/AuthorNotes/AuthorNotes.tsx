import React, { FunctionComponent } from 'react';

import Author from '~/components/Author';
import AuthorPost from '~/components/AuthorPost';

import './AuthorNotes.scss';

const AuthorNotes: FunctionComponent<AuthorNotesProps> = ({
    image,
    title,
    post,
    time,
}: AuthorNotesProps) => {
    const className = 'author-notes';
    return (
        <div className={className}>
            <div className={`${className}__title-box`}>
                <Author image={image} big />
                <span className={`${className}__title`}>{title}</span>
            </div>
            <AuthorPost post={post} time={time} note />
        </div>
    );
};

interface AuthorNotesProps {
    image: string;
    title: string;
    post: string;
    time: string;
}

export default AuthorNotes;
