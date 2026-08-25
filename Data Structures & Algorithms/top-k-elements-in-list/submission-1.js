class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //create map
        const freqMap = new Map();
        //for each number in the array count the accurance and fill the map with num being the key and freqs being the value
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        //create bucket array that hold n+1 slots
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        // using number as the key and freq being the value of freqMap hashMap
        for (const [num, freq] of freqMap) {
            ///use freq as index and push number to be value of the freq index inside the bucket
            bucket[freq].push(num);
        }
        // console.log(bucket)
        // console.log(bucket[2])

        //empty array to store top freq numbers
        const res = [];
        //starting from the end of the bucket work backwards
        for (let i = bucket.length - 1; i >= 0; i--) {
            //taking the current index num value and push to res
            for (const num of bucket[i]) {
                res.push(num);
                //when res length reaches k return res
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
