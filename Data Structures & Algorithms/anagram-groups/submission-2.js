class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = new Map();

        for (const word of strs) {
            const count = new Array(26).fill(0);

            for (const char of word) {
                const index = char.charCodeAt(0) - "a".charCodeAt(0);
                count[index]++;
            }

            const key = count.join(",");

            if (!group.has(key)) {
                group.set(key, [])
            }

            group.get(key).push(word);
        }

        return Array.from(group.values())
    }
}
