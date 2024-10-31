class Solution {
    /**
    * @param {number[]} piles
    * @param {number} h
    * @return {number}
    */
    minEatingSpeed(piles, h) {
        
        let k = 1
        while (true) {
            let sum = piles.reduce((sumAccum, currentPile)=>{
                sumAccum += Math.ceil(currentPile/k)
                return sumAccum
            },0)
            
            if (sum <= h) {
                return k;
            }
            
            k++
        }        
    }
}
