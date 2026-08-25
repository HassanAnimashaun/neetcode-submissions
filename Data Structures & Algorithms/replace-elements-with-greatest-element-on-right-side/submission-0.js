class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const n = arr.length

        for (let i = 0; i < n; i++) {
            let max = -1;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] > max) {
                    max = arr[j];
                }
                
            }
            arr[i] = max;
        }
        return arr
    }
}
