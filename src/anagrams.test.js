import { checkAnagrams } from './anagrams';
import { expect } from 'chai';

describe('get anagram basic functionality', () => {
    it('returns true when anagrams match', () => {
        const expected = true;
        const actual = checkAnagrams('listen', 'silent');
        expect(actual).to.equal(expected);
    });
    it('returns false when either string has extra letters', () => {
        const expected = false;
        const actual = checkAnagrams('elbows', 'below');
        expect(actual).to.equal(expected);

        const actual2 = checkAnagrams('below', 'elbows');
        expect(actual2).to.equal(expected);
    })
    it('returns false when strings have same letters in different quantities', () => {
        const expected = false;
        const actual = checkAnagrams('listens', 'silent');
        expect(actual).to.equal(expected);
    })
});