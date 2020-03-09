import axios from 'axios';
// import { background } from '../../api/index';
import { SetStoryContent } from '~/store/actions';

export const fetchStoryContent = (): void => {
    axios
        .get('http://localhost:1337/story')
        .then(function(response) {
            SetStoryContent(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};
