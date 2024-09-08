function isIsogram(str) {
    return str.toLowerCase()
    .split('')
    .every((char, i, arr) => arr.indexOf(char) === i);
}
