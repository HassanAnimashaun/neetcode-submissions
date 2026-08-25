class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      const numSet = new Set(nums)
      let longSet = 0;

      for(let num of numSet){
        if(!numSet.has(num - 1)){
          let current = num
          let length = 1

          while(numSet.has(current + 1)){
            current++
            length++ 
          }
          longSet =  Math.max(longSet, length)
        }
        
      }
      return longSet
    }
}
