import axios from 'axios';
import { SetDiscoveryContent } from '~/store/actions';

export const fetchDiscoveryContent = (): void => {
    axios
        .get('http://localhost:1337/discoveries')
        .then(function(response) {
            SetDiscoveryContent(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
