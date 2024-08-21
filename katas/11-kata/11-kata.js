function oddOrEven(array) {
    const even = 'even';
    const odd = 'odd';
    if (array.length === 0){
        return even;
    } else {
        const accm = 0;
        const sumTheArray = array.reduce((accm, currVal) => accm + currVal)
        return sumTheArray%2 === 0 ? even : odd;
    }

}