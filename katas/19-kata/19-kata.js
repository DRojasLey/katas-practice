
function whatCentury(year) {
    let remains = year % 100;
    let baseC = Math.floor(year / 100);

    if (remains >= 1) {
      baseC++;
    }

    const getSufix = (century) => {
      const lastDigit = century % 10;
      if (lastDigit === 1 && century !== 11) {
        return 'st';
      } else if (lastDigit === 2 && century !== 12) {
        return 'nd';
      } else if (lastDigit === 3 && century !== 13) {
        return 'rd';
      } else {
        return 'th';
      }
    };

    return baseC + getSufix(baseC);
  }