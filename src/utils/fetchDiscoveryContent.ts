import axios from 'axios';
import { SetDiscoveryContent } from '~/store/actions';
import { Fetch } from '~/constants';

export const fetchDiscoveryContent = (): void => {
    axios
        .get(Fetch.discoveries)
        .then(function(response) {
            SetDiscoveryContent(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
