function solution(str){
    let processStr = '';
    let resultArray = [];
    let temporaryString = '';
    processStr = str.split('');
    if (processStr.length % 2 != 0){
        processStr.push('_');
    }
        while (processStr.length != 0){
            for (i = 0; i< 2; i++){
                temporaryString = temporaryString.concat(processStr.shift());
            }
            resultArray.push(temporaryString);
            temporaryString = '';
        }

    return resultArray;

}