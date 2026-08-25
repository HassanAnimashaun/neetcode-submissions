class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const array = [];

        for (let i = 0; i < nums.length; i++) {
            let count = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    count = nums[j] * count;
                }
            }

            array.push(count);
        }
        return array;
    }
}
