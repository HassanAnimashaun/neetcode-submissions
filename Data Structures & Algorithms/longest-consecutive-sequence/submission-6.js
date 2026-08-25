class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //create set for nums
        const numSet = new Set(nums);
        //init finalMax
        let finalMax = 0;

        //itterate though set checking for previous value
        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let currentMax = 1;
                let current = num;
                while (numSet.has(current + 1)) {
                    current++;
                    currentMax++;
                }

                finalMax = Math.max(finalMax, currentMax);
            }
        }
        return finalMax;
    }
}
