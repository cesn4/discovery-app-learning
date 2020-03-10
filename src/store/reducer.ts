import { ApplicationState } from './storeTypes';
import { Actions } from './storeTypes';

const initialState: ApplicationState = {
    storyContent: {
        title: '',
        paragraphTitle: '',
        paragraph: '',
        paragraphSubtitle: '',
        authorName: '',
        authorImage: '',
        videoURL: '',
        backgroundImage: '',
        paragraphComment: [
            { commentAuthor: '', commentText: '', commentAuthorImage: '' },
        ],
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

export default reducer;
