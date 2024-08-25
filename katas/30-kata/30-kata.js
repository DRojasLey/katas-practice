
function isPangram(string){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",   
       "v", "w", "x", "y", "z"]; // array to compare the ALPAHABET
    string = string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        if (!alphabet.includes(string[i])) {
            return false
        }
        return true
    }
}