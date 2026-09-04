class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //init hashSet and finalCount 
        const numSet = new Set(nums)
        let finalCount = 0
        
        //itterate through set
        for(const num of numSet){

            //find true strart of current number
            if(!numSet.has(num - 1)){
                let count = 1
                let currentNum = num

                while(numSet.has(currentNum + 1)){
                    count++
                    currentNum++
                }
                finalCount = Math.max(finalCount, count)
            }
        }

        return finalCount
        
    }
}
