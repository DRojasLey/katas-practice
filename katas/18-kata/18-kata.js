

var uniqueInOrder=function(iterable){
    let inputProce = iterable
    if (typeof iterable === 'string'){
        inputProce = inputProce.split('');
    };
    const main = inputProce.reduce((resultArr, currEle, index)=>{
        if (index === 0){
            resultArr.push(currEle);
        } else if (currEle != inputProce[index - 1]) {
            resultArr.push(currEle);
        };
        return resultArr;
    }, []);

    return main

};