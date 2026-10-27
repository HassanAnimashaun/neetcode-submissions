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

        const bucket = new Array(26).fill(0);

        for (const char of s) {
            const pos = char.charCodeAt(0) - "a".charCodeAt(0);
            bucket[pos] += 1;
        }

        for (const char of t) {
            const pos = char.charCodeAt(0) - "a".charCodeAt(0);
            bucket[pos] -= 1;

            if (bucket[pos] < 0) {
                return false;
            }
        }
        return true;
    }
}
