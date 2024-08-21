function lovefunc(flower1, flower2){
    let oddtest1 = flower1%2 ? 'odd' : 'even' ;
    let oddtest2 = flower2%2 ? 'odd' : 'even' ;
    if ( oddtest1 === oddtest2){
        return false
    } else {
        return true
    };
}