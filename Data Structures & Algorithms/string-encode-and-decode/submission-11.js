class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for(const word of strs){
            res += word.length + "#" + word
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i = 0
        
        while(i < str.length){
            let j = i
            while (str[j] !== '#'){
                j++
            }

            const wordLen = Number(str.slice(i,j))
            const start = j + 1
            const word = str.slice(start, start + wordLen)
            res.push(word)
            i = wordLen + start
        }
        return res


    }
}
