class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashNums = new Set(nums)
        return hashNums.size !== nums.length
    }
}
