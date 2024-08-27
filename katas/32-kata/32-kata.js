function accum(s) {
    let result = '';
    s = s.split('');
    for (let i = 0 ; i < s.length ; i++){
        result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-'
    }
    return result.slice(0,-1)
}
