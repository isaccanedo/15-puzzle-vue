import { choiceInArray } from '../../core/src';

import castex from './assets/images/puzzle/castex.jpg';

export const url = picture => `url("${picture}")`;

const pictures = {
    castex: url(castex),
};

export const getRandomPicture = () => {
    const choice = choiceInArray(Object.keys(pictures));
    return pictures[choice];
};

export default pictures;
