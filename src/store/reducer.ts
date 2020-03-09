const initialState: ApplicationState = {
    storyContent: {
        title: '',
        paragraphTitle: '',
        paragraph: '',
        paragraphSubtitle: '',
        videoURL: '',
        author: { name: '', profile: '' },
        comments: { name: '', comment: '', profile: '' },
        backgroundImage: '',
    },
};

const reducer = (state = initialState, action: Actions): ApplicationState => {
    switch (action.type) {
        case 'SetStoryContent': {
            return {
                ...state,
                storyContent: action.payload,
            };
        }
        default:
            return state;
    }
};

interface SetStoryConent {
    type: 'SetStoryContent';
    payload: StoryConentItems;
}

type Actions = SetStoryConent;

interface ApplicationState {
    storyContent: StoryConentItems;
}

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

export default reducer;
