function spinWords(string) {
  const splittedWords = string.split(' ')
  /*
  <reduce>
  const resultArray = splittedWords.reduce((acc, word) => {
    let relevantWord = word
    
    if (word.length >= 5) {
      relevantWord = word.split('').reverse().join('')
    }
    
    acc.push(relevantWord)
    return acc
  }, [])
  </reduce>
  */

  //<forEach>
  let resultArray = []
  
  splittedWords.forEach(word => {
    if (word.length >= 5) {
      resultArray.push(word.split('').reverse().join(''))
    } else {
      resultArray.push(word)
    }
  })
  //</forEach>
  
  return resultArray.join(' ')
}
