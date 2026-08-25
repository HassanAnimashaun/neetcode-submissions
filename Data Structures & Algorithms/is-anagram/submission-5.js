class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let charFreq = {};

        for (let char of s) {
            charFreq[char] = (charFreq[char] || 0) + 1;
        }

        for (let char of t) {
            if (!charFreq[char]) {
                return false;
            }
            charFreq[char]--
        }

        return true;
    }
}
