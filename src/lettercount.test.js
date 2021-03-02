import { getLetterCount } from './lettercount';
import { expect } from 'chai';

describe('get letter count basic functionality', () => {
    it('returns empty object when passed an empty string', () => {
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);
    });

    it('return the correct letter count for a word with only one of each letter', () => {
        const expected = { c: 1, a: 1, t: 1 };
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);
    })

    it('returns correct letter count for words with repeated letters', () => {
        const expected = { m: 1, i: 4, s: 4, p: 2 };
        const actual = getLetterCount('mississippi');
        expect(actual).to.deep.equal(expected);
    })
})