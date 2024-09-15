class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const str = strs.reduce((stringu, element) => {
            let encoded = element.length + '%' + element ;
            stringu += encoded ;
            return stringu;
        }, '')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrings = [];
        let currentIndex = 0;

        while (currentIndex < str.length) {
          let characterIndex = currentIndex;

          while (str[characterIndex] !== '%') {
            characterIndex++;
          }

          const length = Number(str.slice(currentIndex, characterIndex));
          currentIndex = characterIndex + 1;
          characterIndex = currentIndex + length;

          decodedStrings.push(str.slice(currentIndex, characterIndex));
          currentIndex = characterIndex;
        }

        return decodedStrings;

    }
}