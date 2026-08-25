class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }

        //create map for char freq
        const charCount = {}

        //increment value in s by 1
        for(let value of s){
            charCount[value] = ((charCount[value] || 0) + 1) 
        }

        //decrement value in t by 1
        for(let value of t){
            charCount[value] = ((charCount[value] || 0) - 1)
            console.log(charCount[value])
        }
        
        //check if charCount < 0
        for(let key in charCount){
            if(charCount[key] !== 0){
                return false
            }
        }
        
        return true;
    }
}
