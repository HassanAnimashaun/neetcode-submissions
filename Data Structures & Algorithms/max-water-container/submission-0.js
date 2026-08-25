class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //define poitners
        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        //loop through array
        for (let i = 0; i < heights.length; i++) {
            let currentMax = 0;
            let width = right - left;
            let smallest = Math.min(heights[left], heights[right]);
            currentMax = width * smallest;
            max = Math.max(max, currentMax);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max
    }
}
