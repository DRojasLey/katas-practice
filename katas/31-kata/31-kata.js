function squareDigits(num){
    let result = '';
    num = num.toString().split('');
    num.forEach(number => {
        result += +number * +number ;
    });
    return  +result
  }