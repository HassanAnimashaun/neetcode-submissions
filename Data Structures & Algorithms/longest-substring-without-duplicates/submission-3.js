class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const array = new Set();
        let maxValue = 0;
        let left = 0;
        for (let right  = 0; right < s.length; right++) {
            while (array.has(s[right])) {
                array.delete(s[left]);
                left++;
            }
            array.add(s[right]);
            maxValue = Math.max(maxValue, right - left + 1);
        }

        return maxValue;
    }
}
