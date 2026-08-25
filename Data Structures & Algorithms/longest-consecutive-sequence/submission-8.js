class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let finalMax = 0;

        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let count = 1;
                let current = num;

                while (numSet.has(current + 1)) {
                    count++;
                    current++;
                }
           

            finalMax = Math.max(finalMax, count);
             }
        }
        return finalMax;
    }
}
