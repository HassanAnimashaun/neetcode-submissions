class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSeen = new Set()
        let left = 0
        let res = 0

        for(let r = 0; r < s.length; r++){
            while(charSeen.has(s[r])){
                charSeen.delete(s[left])
                left++
            }
            charSeen.add(s[r])
            res = Math.max(res, r - left + 1)
        }
        return res
    }
}
