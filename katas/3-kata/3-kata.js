
function getCount(str) {
    let vowelCounter = 0;
    for (let numOfLetters = 0;  numOfLetters <= str.length ; numOfLetters++){
      if (str[numOfLetters] === 'a' || str[numOfLetters] === 'e' || str[numOfLetters] === 'i' || str[numOfLetters] === 'o' || str[numOfLetters] === 'u'){
        vowelCounter++
      }
    }
    return vowelCounter;

  }

