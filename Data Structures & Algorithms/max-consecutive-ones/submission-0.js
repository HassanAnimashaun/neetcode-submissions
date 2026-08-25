class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        const n = nums.length;
        let max = 0;
        let currentMax = 0;

        for (let i = 0; i < n; i++) {
            if (nums[i] !== 1) {
                currentMax = 0;
            } else {
                currentMax++;
            }
            max = Math.max(currentMax, max);
        }
        return max
    }
}
