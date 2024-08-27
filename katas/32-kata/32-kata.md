# 32th Kata -- Mumbling





by *[g964](https://www.codewars.com/users/g964)*


## Task

### Mumbling

This time no story, no theory. The examples below show you how to write function accum:

```
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```


The parameter of accum is a string which includes only letters from a..z and A..Z.



## Test Examples

```js
const Test = require('@codewars/test-compat');

describe("accum",function() {
it("Basic tests",function() {    
	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})})
```


## Notes

This one was interesting, it was not as easy as I thought it was going to be, but not as hard as I feared at some point.

## My solution with comments:

```js
function accum(s) {
    let result = ''; // we ensure that we will concatenate and return a string from the start
    s = s.split(''); // we will  iterate over an array
    for (let i = 0 ; i < s.length ; i++){
        result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-' // concatenate to the original string the uppercased letter and then the lowercase letters times the index, and the hyphen
    }
    return result.slice(0,-1) // remove the last hyphen by slicing the string
}
```


## Results

```js
Time: 745ms Passed: 101Failed: 0
Test Results:
accum
Basic tests
Completed in 8ms
Random tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[babyseal](https://www.codewars.com/users/babyseal)*

```js
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
```

## Notes about the interesting one:

Most solutions are similar to mine, but using their favorite iterator function, for example in this case the person uses map, the interesting bit  is the order, in which the operations are completed, which allows this person to just join using the hyphen on the array, removing the need of the slice I used at the end.

---