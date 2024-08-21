function disemvowel(str) {
    let strResponse = ""; 
    const vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        strResponse += str[i];
      }
    }
    return strResponse;
  }