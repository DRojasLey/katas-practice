function narcissistic(value) {
    let numberAsArray = value.toString().split(''); 
    let elevatedArray = numberAsArray.map((x) => (+x)** numberAsArray.length);
    let sumOfNumber = 0; 
    elevatedArray.forEach( num =>{ sumOfNumber += num}) 
    if (sumOfNumber === value){ return true} else { return false}; 
}