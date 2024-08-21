function points(games) {
    let result = 0;
    let iteranding = games.forEach(currStr=>{
        let  arr = currStr.split(':')
        if(+arr[0] > +arr[1]){
            result += 3;
        } else if (+arr[0] === +arr[1]){
            result ++;
        }
    });
    return result
}


