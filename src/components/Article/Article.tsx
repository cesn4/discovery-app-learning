import React, { FunctionComponent } from 'react';

import PostInfo from '~/components/PostInfo';

import './Article.scss';

const Article: FunctionComponent<ArticleProps> = ({
    title,
    content,
}: ArticleProps) => {
    const className = 'article';
    return (
        <div className={className}>
            <div className={`${className}__box`}>
                <h1 className={`${className}__title`}>{title}</h1>
                <p className={`${className}__content`}>{content}</p>
                <div className={`${className}__post-info`}>
                    <PostInfo
                        subtitle="Thought Experiment- VR Travel App"
                        time="3h ago by Worldnews"
                    />
                </div>
            </div>
        </div>
    );
};

interface ArticleProps {
    title: string;
    content?: string;
}

export default Article;
