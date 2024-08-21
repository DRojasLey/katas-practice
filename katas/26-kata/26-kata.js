function reverseWords(str) {
    let res =  str.split(' ').reduce((newStr, currWord)=>{
        if (currWord.length === ''){
            newStr += ' '
        }  else {
            let reversedWord = currWord.split('').reverse().join('');
            return newStr + (newStr ? ' ' : '') + reversedWord;
        }
    }, '');
    return res
}


//With Dani help:

function reverseWords(str) {
    let res =  str.split(' ').reduce((newStr, currWord)=>{
            let reversedWord = currWord.split('').reverse().join('');
            return newStr + (newStr ? ' ' : '') + reversedWord;
    }, '');
    return res
}

