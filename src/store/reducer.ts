const initialState: ApplicationState = {
    heroBackground: [],
};

const reducer = (state = initialState, action: Actions): ApplicationState => {
    switch (action.type) {
        case 'SetHeroBackground': {
            return {
                ...state,
                heroBackground: action.payload,
            };
        }
        default:
            return state;
    }
};

interface SetHeroBackground {
    type: 'SetHeroBackground';
    payload: Array<HeroBackgroundItems>;
}

type Actions = SetHeroBackground;

interface ApplicationState {
    heroBackground: Array<HeroBackgroundItems>;
}

interface HeroBackgroundItems {
    title: string;
    subtitle: string;
    paragraph: string;
}

export default reducer;
