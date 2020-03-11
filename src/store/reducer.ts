import { ApplicationState } from './storeTypes';
import { Actions } from './storeTypes';

const initialState: ApplicationState = {
    storyContent: [],
    discoveryContent: [],
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
        default:
            return state;
    }
};

export default reducer;
