// function expandedForm(num) {
//     let numToProcess = num.toString().split('').reverse(); //this converts to array
//     let numLength = numToProcess.length; // this is the length of said array
//     let resultingArray =  numToProcess.map( //this starts the iterator
//         (element,numLength)=> { // we pass the element and the numLength
//             if (element === numToProcess[0]){ // if it is the first element on the array
//                 return element + '0'.repeat(numLength);
//             } else{
//                 return element + '0'.repeat(numLength);
//             };
//        });
//     resultingArray = resultingArray.reverse(); // we reverse back to normal the array
//     const finalResult = resultingArray.reduce((acc, currElement) => {
//     if (acc === '') { // Only prepend " + " for elements after the first
//       return currElement;
//     } else {
//       return acc =0 ? '' : acc + ' + ' + currElement;
//     }
//   }, ''); // Initial accumulator as an empty string

//   return finalResult;
// };




function expandedForm(num) {
    let numArray = num.toString().split(''); 
    let processor = numArray.reduce((newString, currElement, index) =>{
        const arrLength = numArray.length-1;
        let toAdd = ''; 
       if (index === 0){ 
            toAdd = currElement + ('0'.repeat(arrLength-index)); 
            newString += toAdd;
        } else {
            if (currElement != 0){ 
                toAdd = toAdd + ' + ' + currElement + ('0'.repeat(arrLength-index)); 
                newString += toAdd;
            } else {
                toAdd = toAdd += '';
                newString += toAdd;
            }
       }
       return newString; 
    },'');
    return processor 
};