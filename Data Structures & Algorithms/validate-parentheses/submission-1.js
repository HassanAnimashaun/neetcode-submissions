class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //empty stack 
        const stack = []

        //closing : open bracket key
        const closedToOpen = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        //itterate through each bracket in string
        //checking current value against key 
        for(let c of s){
            if(closedToOpen[c]){
                if(stack.length > 0 && stack[stack.length - 1] === closedToOpen[c]){
                    stack.pop()
                }else{
                    return false 
                }
            }
            else{
                stack.push(c)
            }
        }
        return stack.length === 0
    }
}
