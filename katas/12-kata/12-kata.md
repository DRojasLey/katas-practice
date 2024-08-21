# 12th Kata -- Split Strings






by *[jhoffner](https://www.codewars.com/users/jhoffner)*


## Task

### Split Strings


Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

```
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
```


## Test Examples

```js

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});

```


## Notes

Most solutions in the solutions section look way simpler, but use regex to get the code to be really short, this code has a lot of opportunities but was a fundamental step toward learning


## My solution with comments:

```js

function solution(str){
    // I don't think I need this much variables, and I think most of the complexity on the below code comes from the amount of variables I used
    let processStr = '';
    let resultArray = [];
    let temporaryString = '';
    processStr = str.split('');
    // this can be a ternary to check for the oddness or eveness of the characters
    if (processStr.length % 2 != 0){
        processStr.push('_');
    }
    // this function declaration is so unnecesary it hurts me, but I was running out of time so I did't feel like simplifying
        while (processStr.length != 0){
            for (i = 0; i< 2; i++){ // we run this two times to take the first 2
                temporaryString = temporaryString.concat(processStr.shift());
            }
            resultArray.push(temporaryString);
            temporaryString = '';
        }

    return resultArray;

}
```


## Results

```js

Time: 784ms Passed: 2Failed: 0
Test Results:
Split Strings
Basic tests
Random tests
Completed in 6ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[myjinxin2015](https://www.codewars.com/users/myjinxin2015)*

```js

function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
```

## Notes about the interesting one:

Apparently the regex will do everything for you:
/ stars the pattern
. (dot): Matches any single character except newline characters.
{2}: Matches exactly two of the preceding token (in this case, any character).
/g: The global flag, which means it will find all matches in the string, not just the first one.

And then by grace of Turing himself .match will take any sequence matching and return it as an array, and also will add the elements directly

The regular expression /.{2}/g matches any sequence of two characters within a string. It will find all occurrences of these two-character sequences and return them as an array.

The lesson here is: I need to learn REGEX?


---