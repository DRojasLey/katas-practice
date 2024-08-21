

function createPhoneNumber(numbers){

    let resultArr = numbers.reduce((accum , currVal) =>{
        const pushOriginalArr = (currentIndex = 1, nextLimitIndex = 4) =>{
        for (let index = currentIndex; index < nextLimitIndex; index++) {accum.push(numbers[index])};
        };
        accum.push('(');
        pushOriginalArr(0, 3);
        accum.push(') ');
        pushOriginalArr(3,6);
        accum.push('-');
        pushOriginalArr(6,10);
        return accum;
    },[]);


    console.log(resultArr);
    return resultArr.join('').slice(0,14);
}

