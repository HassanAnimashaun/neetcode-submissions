class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const joinStrs = [];
        for (let i = 0; i < strs.length; i++) {
            joinStrs.push(strs[i].length + "#" + strs[i]);
        }
        return joinStrs.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const finalStrs = [];
        let count = []
        let wordStart = 0;
        for (let i = 0; i < str.length; ) {
            if (str[i] !== "#") {
                count.push(str[i]);
                i++;
            } else if (str[i] === "#") {
                wordStart = i + 1;
                
                let counter = count.join("")
                counter = (parseInt(counter)) ;
                let nextCount = wordStart + counter;
                const splitWord = str.slice(wordStart, nextCount);
                finalStrs.push(splitWord);
                count.length = 0; 
                i = nextCount;
            }
        }
        return finalStrs;
    }
}
