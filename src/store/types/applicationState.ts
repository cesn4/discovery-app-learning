import {
    StoryContentItems,
    DiscoveryContentItems,
    LogoContentItems,
} from '~/store/types';

export interface ApplicationState {
    storyContent: Array<StoryContentItems>;
    discoveryContent: Array<DiscoveryContentItems>;
    logoContent: LogoContentItems;
}
