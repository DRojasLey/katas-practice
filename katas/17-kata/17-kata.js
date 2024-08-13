// function solution(string) {
//     let processingArr = string.split('').reverse();
//     const mappedArr = processingArr.map( (letter, index) =>{
//         if (letter.toUpperCase === letter){
//             //here we will apply the space before the cased letter
//             mappedArr += ' ' + letter;
//         } else {
//             mappedArr += letter;
//         }
//         return mappedArr
//     })
//     let finalString = mappedArr.join('');
//     return finalString;
//   }


function solution(string) {
    let arrayedStr = string.split('')
                           .reduce((strToReturn, currEle ) =>{
                               if (currEle.toUpperCase() === currEle){
                                   strToReturn += ` ${currEle}`;
                               } else{
                                   strToReturn += currEle;
                               };
                               return strToReturn
}, '');
    return arrayedStr
};