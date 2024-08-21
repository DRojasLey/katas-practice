function findShort(string){
    let arra = string.split(' ');
    let res = arra.reduce((newArr, currEle)=>{
        newArr.push(currEle.length);
        return newArr;
    },[])
    res = res.sort((a,b)=>a-b)
    return res[0]
}