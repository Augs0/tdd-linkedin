import { getLetterCount } from './lettercount';
import { isEqual } from 'lodash';

export const checkAnagrams = (string1, string2) => {
    const string1LetterCount = getLetterCount(string1);
    const string2LetterCount = getLetterCount(string2);

    return isEqual(string1LetterCount, string2LetterCount);
};