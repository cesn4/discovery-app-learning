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
    category: string;
}

export interface LogoContentItems {
    title: string;
}
