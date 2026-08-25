class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {}
        const bucket = Array.from({length: nums.length + 1}, () => [])

        for(const num of nums){
            freqMap[num] = (freqMap[num] || 0) + 1
        }
        for (const [num, freq] of Object.entries(freqMap)) {
            bucket[freq].push(Number(num));
        }

        const result = []
      for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }
        
    }
}
