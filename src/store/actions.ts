import { store } from '~/store';

import { StoryContentItems, DiscoveryContentItems } from './storeTypes';

export const SetStoryContent = (payload: Array<StoryContentItems>): void => {
    store.dispatch({ type: 'SetStoryContent', payload: payload });
};

export const SetDiscoveryContent = (
    payload: Array<DiscoveryContentItems>
): void => {
    store.dispatch({ type: 'SetDiscoveryContent', payload: payload });
};