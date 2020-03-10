import { store } from '~/store';

import { StoryContentItems } from './storeTypes';

export const SetStoryContent = (payload: Array<StoryContentItems>): void => {
    store.dispatch({ type: 'SetStoryContent', payload: payload });
};
