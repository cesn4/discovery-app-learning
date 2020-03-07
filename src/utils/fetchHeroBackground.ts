import axios from 'axios';
import { setHeroBackground } from '~/store/actions';

export const fetchHeroBackground = (): void => {
    axios
        .get('http://localhost:1337/backgrounds')
        .then(function(response) {
            setHeroBackground(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
