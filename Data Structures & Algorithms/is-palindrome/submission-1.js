class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.toLowerCase().replace(/[^a-zA-Z1-10]/g, '');
        let l = 0
        let r = newS.length - 1

        while(l < r){
         if(newS[l] !== newS[r]){
            return false
         }
         l++
         r--
        }
        return true
    }
}
