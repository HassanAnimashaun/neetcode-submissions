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

        const charFreq = {};

        for (const char of s) {
            charFreq[char] = (charFreq[char] || 0) + 1;
        }

        for (const char of t) {
            charFreq[char] = (charFreq[char] || 0) - 1;
            if (charFreq[char] < 0) {
                return false;
            }
        }
        return true
    }
}
