function SeriesSum(n) {
    if (n === 0) {
      return "0.00";
    }
    let sum = 1;
    let denominator = 1;
    for (let i = 1; i < n; i++) {
      denominator += 3;
      sum += 1/denominator;
    }
    return sum.toFixed(2);
  }