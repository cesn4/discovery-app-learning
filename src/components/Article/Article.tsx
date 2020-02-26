import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import PostInfo from '~/components/PostInfo';

import './Article.scss';

const Article: FunctionComponent<ArticleProps> = ({
    title,
    content,
    subtitle,
    time,
    notes = undefined,
}: ArticleProps) => {
    const className = 'article';
    return (
        <div className={className}>
            <div
                className={classNames(`${className}__box`, { '-notes': notes })}
            >
                {title && <h1 className={`${className}__title`}>{title}</h1>}
                <p
                    className={classNames(`${className}__content`, {
                        '-notes': notes,
                    })}
                >
                    {content}
                </p>
                <div
                    className={classNames(`${className}__post-info`, {
                        '-notes': notes,
                    })}
                >
                    <PostInfo subtitle={subtitle} time={time} />
                </div>
            </div>
        </div>
    );
};

export interface ArticleProps {
    title?: string;
    content?: string;
    subtitle?: string;
    time?: string;
    notes?: boolean;
}

export default Article;
