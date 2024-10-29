class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);

        let fleetCount = 0;
        const timeToReach = new Array(n);
        for (let i = 0; i < n; i++) {
            timeToReach[i] = (target - pairs[i][0]) / pairs[i][1];
            if (i >= 1 && timeToReach[i] <= timeToReach[i - 1]) {
                timeToReach[i] = timeToReach[i - 1];
            } else {
                fleetCount++;
            }
        }
        return fleetCount;
    }
}