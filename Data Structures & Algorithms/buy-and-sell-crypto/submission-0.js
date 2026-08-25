class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let minPrice = prices[0]

        for(let i = 1; i < prices.length; i++){
            
            let max = prices[i] - minPrice
            maxProfit = Math.max(maxProfit, max)

            if(prices[i] < minPrice){
                minPrice = prices[i]
            }
            
        }
        return maxProfit

    }
}
