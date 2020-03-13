import axios from 'axios';
import { SetDiscoveryContent } from '~/store/actions';
import { Endpoints } from '~/constants';

export const fetchDiscoveryContent = (): void => {
    axios
        .get(Endpoints.discoveries)
        .then(function(response) {
            SetDiscoveryContent(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
