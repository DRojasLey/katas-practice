function isPangram(string){
    let resutl = [];
    const asciiAlphabet = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
    let nowArray = string.toLowerCase().split(' ').join('').split('')
    nowArray = nowArray.sort()
    const returnUnique = nowArray.reduce((resultArr, currEle, index)=>{
        if (index === 0){
            resultArr.push(currEle);
        } else if (currEle != nowArray[index - 1]) {
            resultArr.push(currEle);
        };
        return resultArr;
    }, []);
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