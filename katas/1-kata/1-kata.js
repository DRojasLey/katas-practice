

function solution(number){
  if (Math.sign(number) === -1){
    return 0;
  }else{
    let myCounter = 0;
    let sum = 0;
    do {
      if (myCounter%3 === 0 && myCounter%5 === 0){
        sum += myCounter;
      } else if (myCounter%3 === 0 || myCounter%5 === 0 ){
        sum += myCounter
      }
      myCounter++;
    } while (myCounter < number);
    return sum ;

  }
}
