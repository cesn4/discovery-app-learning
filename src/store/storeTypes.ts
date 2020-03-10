//ApplicationState types

export interface ApplicationState {
    storyContent: Array<StoryContentItems>;
}

//Actions types
export type Actions = SetStoryContent;

export interface SetStoryContent {
    type: 'SetStoryContent';
    payload: Array<StoryContentItems>;
}

//ConentItems types

export interface StoryContentItems {
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
