class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Initialize rows as array of 9 empty Sets
        const row = Array.from({length:9}, () => new Set())
        // Initialize cols as array of 9 empty Sets
        const col = Array.from({length:9}, () => new Set())
        // Initialize boxes as array of 9 empty Sets
        const box = Array.from({length:9}, () => new Set())
        
        // For r from 0 to 8:
        for(let i = 0; i < 9; i++){
            //For c from 0 to 8:
            for(let j = 0; j < 9; j++){

                //value = board[r][c]
                const value = board[i][j]

                //If value is '.':
                //continue
                if(value === '.') continue;
            
                //boxIndex = floor(r / 3) * 3 + floor(c / 3)
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                //If rows[r] contains value:
                //If cols[c] contains value:
                //If boxes[boxIndex] contains value:
                if(row[i].has(value) || col[j].has(value) || box[boxIndex].has(value)){
                    return false
                } 
            
                //Add value to rows[r]
                row[i].add(value)
                //Add value to cols[c]
                col[j].add(value)
                //Add value to boxes[boxIndex]
                box[boxIndex].add(value)
            
            }
        }
        return true  
    }
}