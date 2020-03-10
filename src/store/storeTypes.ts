//ApplicationState types

export interface ApplicationState {
    storyContent: StoryConentItems;
}

//Actions types
export type Actions = SetStoryConent;

export interface SetStoryConent {
    type: 'SetStoryContent';
    payload: StoryConentItems;
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
    paragraphComment: ParagraphComment;
}

export interface ParagraphComment {
    commentAuthor: string;
    commentText: string;
    commentAuthorImage: string;
}
