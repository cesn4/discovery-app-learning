import { store } from '~/store';

import { StoryConentItems } from './storeTypes';

export const SetStoryContent = (payload: StoryConentItems): void => {
    store.dispatch({ type: 'SetStoryContent', payload: payload });
};
