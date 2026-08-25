class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const n = nums.length;
        const temp = []
        for (let i = 0; i < n; i++) {
            if (nums[i] !== val) {
                temp.push(nums[i])
            }
        }
          for (let i = 0; i < temp.length; i++) {
            nums[i] = temp[i];
        }

        return temp.length
    }
}
