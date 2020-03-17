import {
    StoryContentItems,
    DiscoveryContentItems,
    LogoContentItems,
} from '~/store/types';

export type Actions = SetStoryContent | SetDiscoveryContent | SetLogoContent;

export interface SetStoryContent {
    type: 'SetStoryContent';
    payload: Array<StoryContentItems>;
}

export interface SetDiscoveryContent {
    type: 'SetDiscoveryContent';
    payload: Array<DiscoveryContentItems>;
}

export interface SetLogoContent {
    type: 'SetLogoContent';
    payload: LogoContentItems;
}
