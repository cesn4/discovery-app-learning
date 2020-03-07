import { store } from '~/store';

export const setHeroBackground = (
    payload: Array<HeroBackgroundItems>
): void => {
    store.dispatch({ type: 'SetHeroBackground', payload: payload });
};

interface HeroBackgroundItems {
    title: string;
    subtitle: string;
    paragraph: string;
}
