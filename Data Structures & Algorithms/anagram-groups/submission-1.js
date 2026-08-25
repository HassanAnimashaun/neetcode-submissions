class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = {};

        for (let word of strs) {
            const count = new Array(26).fill(0);

            for (let char of word) {
                const index = char.charCodeAt(0) - "a".charCodeAt(0);
                count[index]++;
            }

            const key = count.join(",");

            if (!group[key]) {
                group[key] = [];
            }

            group[key].push(word);
        }

        return Object.values(group);
    }
}
