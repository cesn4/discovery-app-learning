import axios from 'axios';
import { SetStoryContent } from '~/store/actions';

export const fetchStoryContent = (): void => {
    axios
        .get('http://localhost:1337/stories')
        .then(function(response) {
            SetStoryContent(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
