class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // compare and check set 
        const seenChar = new Set()
        let left = 0
        let count = 0 
        
        //itterate both right and left pointer at 0 
        for(let right = 0; right < s.length; right++){
           //check for reapting char in set
            while(seenChar.has(s[right])){
               seenChar.delete(s[left])
               left++
            }

             //populate window size while current right 
            //value isnt in hashSet
            seenChar.add(s[right])
            count = Math.max(count, right - left + 1 )
        }
        return count
    }
}
