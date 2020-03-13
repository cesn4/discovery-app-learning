import axios from 'axios';
import { SetStoryContent } from '~/store/actions';
import { Endpoints } from '~/constants';

export const fetchStoryContent = (): void => {
    axios
        .get(Endpoints.stories)
        .then(function(response) {
            SetStoryContent(response.data);
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
