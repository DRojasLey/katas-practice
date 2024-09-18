class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const dictio = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    if( s.length === 0 ) {
        return true ;
    }
    if (!s.includes(')') && !s.includes('}') && !s.includes(']')){
        return false ;
    }

    let newStringu ;

    for (let index = 0; index < s.length; index++) {
        const character = s[index] ;
        if (!(character in dictio)) continue ;
        if (index === 0) return false ;
        if (s[index-1] !== dictio[character]) return false ;
        let firstoHalf = s.slice( 0 , index -1 ) ;
        let secondoHalf = s.slice( index + 1 ) ;
        newStringu = firstoHalf + secondoHalf ;
        break
    }
    return this.isValid( newStringu )

}
}