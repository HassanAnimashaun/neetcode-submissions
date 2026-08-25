class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = {}

        for(let s of strs){
            const key = s.split('').sort().join('');

            if(!group[key]){
                group[key] = []
                
            }
            group[key].push(s)
        }
        return Object.values(group)
    }
}
