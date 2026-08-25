class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //define poitners init max tracker
        let left = 0;
        let right = heights.length - 1;
        let max = 0;


        //finding the width of the distance between rigth and left 
        //taking the smallest value of left or right 
        //keeping track of current maxarea and comparing with previous max area
        //findind the 2nd largest value ensuring max water to be contianed by comparing left and right pointers to eachother
        while (left < right) {
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
