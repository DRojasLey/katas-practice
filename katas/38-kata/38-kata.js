function sortArray(arr) {
    const odds = arr.filter(num => num % 2 !== 0);
    odds.sort((a, b) => a - b);
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        arr[i] = odds[index++];
      }
    }
    return arr;
  }