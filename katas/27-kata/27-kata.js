const isSquare = n =>{
    if (n >= 0){
        let ruut = (Math.sqrt(n)).toString();
        ruut = ruut.split('.')[1];
        return  !ruut ? true : false ;
    }else{
        return false;
    }
}