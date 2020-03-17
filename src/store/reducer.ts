import { ApplicationState } from './types';
import { Actions } from './types';

const initialState: ApplicationState = {
    storyContent: [],
    discoveryContent: [],
    logoContent: { title: '' },
};

const reducer = (state = initialState, action: Actions): ApplicationState => {
    switch (action.type) {
        case 'SetStoryContent': {
            return {
                ...state,
                storyContent: action.payload,
            };
        }
        case 'SetDiscoveryContent': {
            return {
                ...state,
                discoveryContent: action.payload,
            };
        }
        case 'SetLogoContent': {
            return {
                ...state,
                logoContent: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
