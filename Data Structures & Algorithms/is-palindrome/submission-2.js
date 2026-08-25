class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let isException = /[a-zA-Z0-9]/

        let left = 0
        let right = s.length - 1


        //Checking if we are within string boundaires at both ends
        //also checking if positions at left and right are anything other than alphanumeric values
        //checking if each positon char value is the same
        while(left < right){
            while(left < right && !isException.test(s[left]) ){
                left++
            }

            while(left < right && !isException.test(s[right]) ){
                right--
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }

            left++
            right--
        }
        return true
    }
}
