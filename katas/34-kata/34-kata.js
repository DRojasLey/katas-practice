function nbYear(p0, percent, aug, p) {
    let countYear
    for (countYear = 0 ; p0 < p ; countYear++) {
        p0 = Math.floor(p0 + ((p0*(percent/100)) + aug));
    };
    return countYear
}