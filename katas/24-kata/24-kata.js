function findUniq(arr) {
    let array1 = arr.sort((a,b)=> a-b)
    if (array1[0] != array1[1]){
      return +array1[0]
    } else {
      return +array1[array1.length - 1]
    }
  }
