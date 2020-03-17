import { store } from '~/store';

import {
    StoryContentItems,
    DiscoveryContentItems,
    LogoContentItems,
} from './types';

export const SetStoryContent = (payload: Array<StoryContentItems>): void => {
    store.dispatch({ type: 'SetStoryContent', payload: payload });
};

export const SetDiscoveryContent = (
    payload: Array<DiscoveryContentItems>
): void => {
    store.dispatch({ type: 'SetDiscoveryContent', payload: payload });
};

export const SetLogoContent = (payload: LogoContentItems): void => {
    store.dispatch({ type: 'SetLogoContent', payload: payload });
};
