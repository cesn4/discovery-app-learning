import axios from 'axios';
import { SetLogoContent } from '~/store/actions';
import { Endpoints } from '~/constants';

export const fetchLogoContent = (): void => {
    axios
        .get(Endpoints.logo)
        .then(function(response) {
            SetLogoContent(response.data);
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
