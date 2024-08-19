

function spinWords(string){
    const reverseString = (str) => {
        return str.split("").reverse().join("");
    }
    let myString = string ;
    let onlyWords = myString.split(' ');

    if (onlyWords.length === 1){

        if (onlyWords[0].length >= 5){
            onlyWords = reverseString(onlyWords[0]);
            return onlyWords;
        } else {
            onlyWords = onlyWords.join();
            return onlyWords;
        }
    } else {
        onlyWords = onlyWords.map((x) => {
            if (x.length >= 5){
                reverseString(x);
            }
        });

        return onlyWords.join();
        console.log(onlyWords.join());
    }
}

