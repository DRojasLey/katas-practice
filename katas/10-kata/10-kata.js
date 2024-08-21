function sumTwoSmallestNumbers(numbers) {
    let organizedArray =   numbers.sort((a, b) => a - b);
    return organizedArray[0] + organizedArray[1];
  }
