function getMiddle(string){
    if (string.length>0){
        let middle = Math.floor(string.length/2) - 1;

        if (string.length%2){
            return string.slice(middle + 1, middle + 2 );
        } else {
            return string.slice(middle, middle +2);
        }
    } else {
        console.log('not taking into acc the 1 letter string')
    }

}

