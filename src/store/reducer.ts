import { ApplicationState } from './storeTypes';
import { Actions } from './storeTypes';

const initialState: ApplicationState = {
    storyContent: [],
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
