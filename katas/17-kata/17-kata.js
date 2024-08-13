function solution(string) {
    let processingArr = string.split('').reverse();
    const mappedArr = processingArr.map( (letter, index) =>{
        if (letter.toUpperCase === mappedArr[index]){
            //here we will apply the space before the cased letter
            mappedArr += ' ' + letter;
        } else {
            mappedArr += letter;
        }
        return mappedArr
    })
    let finalString = mappedArr.join('');
    return finalString;
  }