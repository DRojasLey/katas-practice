function minMax(arr){
    let result = arr.sort((a,b)=>a-b);
    return [result[0], result[result.length - 1]];
  }