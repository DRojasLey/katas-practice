class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    let string1 = s.toLowerCase().split(' ').join('');
    const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let filteredString = string1.split('').reduce((accumulatorString, letter) => {
        if (alphaNumeric.includes(letter)){
            accumulatorString += letter
        }
        return accumulatorString;
    }, '')
    const reversedStr = filteredString.split('').reverse().join('');
    return filteredString === reversedStr ? true : false ;
}
}
