//ApplicationState types

export interface ApplicationState {
    storyContent: Array<StoryConentItems>;
}

//Actions types
export type Actions = SetStoryConent;

export interface SetStoryConent {
    type: 'SetStoryContent';
    payload: Array<StoryConentItems>;
}

//ConentItems types

export interface StoryConentItems {
    title: string;
    paragraphTitle: string;
    paragraph: string;
    paragraphSubtitle: string;
    authorName: string;
    authorImage: string;
    videoURL: string;
    backgroundImage: string;
    paragraphComment: Array<ParagraphComment>;
}

export interface ParagraphComment {
    commentAuthor: string;
    commentText: string;
    commentAuthorImage: string;
}
