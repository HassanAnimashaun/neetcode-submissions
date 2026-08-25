class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seenNum = {}
        
        for(let i = 0; i < nums.length; i++){
            const compliment = target - nums[i]

            if(compliment in seenNum){
                return [seenNum[compliment], i]
            }
            seenNum[nums[i]] = i
        }
        return []
    }
  
}
