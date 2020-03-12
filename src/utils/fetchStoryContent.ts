import axios from 'axios';
import { SetStoryContent } from '~/store/actions';
import { Fetch } from '~/constants';

export const fetchStoryContent = (): void => {
    axios
        .get(Fetch.stories)
        .then(function(response) {
            SetStoryContent(response.data);
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
