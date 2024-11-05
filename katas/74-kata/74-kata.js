class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, new Map());
        }
        if (!this.keyStore.get(key).has(timestamp)) {
            this.keyStore.get(key).set(timestamp, []);
        }
        this.keyStore.get(key).get(timestamp).push(value);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }
        let seen = 0;

        for (let time of this.keyStore.get(key).keys()) {
            if (time <= timestamp) {
                seen = Math.max(seen, time);
            }
        }
        return seen === 0 ? "" : this.keyStore.get(key).get(seen).at(-1);
    }
}