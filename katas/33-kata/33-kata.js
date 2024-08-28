function XO(str) {
    const numOfX= str.toLowerCase().split('x').length-1;
    const numOfO= str.toLowerCase().split('o').length-1;
    if (!numOfO && !numOfX){
        return true;
    }else {
    return numOfX !== numOfO ? false : true ;
    }
}