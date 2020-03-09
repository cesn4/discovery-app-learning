import { store } from '~/store';

export const SetStoryContent = (payload: StoryConentItems): void => {
    store.dispatch({ type: 'SetStoryContent', payload: payload });
};

interface StoryConentItems {
    title: string;
    paragraphTitle: string;
    paragraph: string;
    paragraphSubtitle: string;
    videoURL: string;
    author: AuhtorProfile;
    comments: AuthorComment;
    backgroundImage: string;
}

interface AuhtorProfile {
    name: string;
    profile: string;
}

interface AuthorComment {
    name: string;
    comment: string;
    profile: string;
}
