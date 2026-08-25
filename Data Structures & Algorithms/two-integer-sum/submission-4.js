class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let emptyMap = new Map()

        for(let i = 0; i < nums.length; i++){
            let complement = target - nums[i] 
            
            if(emptyMap.has(complement)){
                return [emptyMap.get(complement), i];
            }
            
            emptyMap.set(nums[i], i)
        }
        return
    }
}
