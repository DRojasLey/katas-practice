function isPangram(string){
    let resutl = [];
    const asciiAlphabet = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]; // array to compare the ALPAHABET
    let nowArray = string.toLowerCase().split(' ').join('').split('') //convert into a lower case array with no spaces
    nowArray = nowArray.sort() //organize it
    const returnUnique = nowArray.reduce((resultArr, currEle, index)=>{ // initialize the reduce
        if (index === 0){ // just want to make sure the first element is always pushed to the resulting array
            resultArr.push(currEle);
        } else if (currEle != nowArray[index - 1]) { // check if the current element is equal to the previous element
            resultArr.push(currEle);
        };
        return resultArr; // always return the reduce accumulator
    }, [/* empty array as initial value for the accumulator*/]);
    //now that we have an array with unique elements we will remove any that is not included in our asciiAlphabet
    returnUnique.forEach(element => {
        if (asciiAlphabet.includes(element.charCodeAt(element))) {
            resutl.push(element)
        }
    });
    if (resutl.length === 26){
        return true
    }else {
        return false
    }
}