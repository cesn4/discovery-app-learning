//ApplicationState types

export interface ApplicationState {
    storyContent: Array<StoryContentItems>;
    discoveryContent: Array<DiscoveryContentItems>;
}

//Actions types
export type Actions = SetStoryContent | SetDiscoveryContent;

export interface SetStoryContent {
    type: 'SetStoryContent';
    payload: Array<StoryContentItems>;
}

export interface SetDiscoveryContent {
    type: 'SetDiscoveryContent';
    payload: Array<DiscoveryContentItems>;
}

//ConentItems types

// Story
export interface StoryContentItems {
    id: number;
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

//Discovery

export interface DiscoveryContentItems {
    id: number;
    background: string;
    title: string;
    subtitle: string;
    authorImage: string;
    noteAuthorImage: string;
    notePost: string;
    noteTitle: string;
    paragraphComment: string;
    paragraphImage: string;
    paragraphText: string;
}
