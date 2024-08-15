# 20th Kata -- Good vs Evil


by *[Frzy](https://www.codewars.com/users/Frzy)*


## Task

### Good vs Evil


Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:


```
Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
```

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

#### Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

#### Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.


## Test Examples

```js
const {assert} = require("chai");

describe("Sample tests", () => {
  it("Evil wins", () => {
    assert.equal(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
  });
  it("Good wins", () => {
    assert.equal(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
  });
  it("No winner", () => {
    assert.equal(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');
  });
});
```


## Notes

This one was easier than I was expecting, just repetitive and long the way I did it.

## My solution with comments:

```js

function goodVsEvil(good, evil){
    let goodA = good.split(' ').reduce((armyWorth, currentRace, index)=>{ //convert into array and initialize reduce
        switch(index){
            case 0:
                armyWorth = armyWorth + +currentRace; // hobbitses 1 to 1
                break;
            case 1:
                armyWorth = armyWorth + (+currentRace * 2); // men 1 to  2
                break;
            case 2:
                armyWorth = armyWorth + (+currentRace * 3); // elf 1 to  3
                break;
            case 3:
                armyWorth = armyWorth + (+currentRace * 3); // dwarves 1 to  3
                break;
            case 4:
                armyWorth = armyWorth + (+currentRace * 4); // Eagles 1 to  4
                break;
            case 5:
                armyWorth = armyWorth + (+currentRace * 10); // Wizards 1 to  10
                break;
        }
        return armyWorth; // always return the reduce accumulator

    }, 0);

    let evilA = evil.split(' ').reduce((armyWorth, currentRace, index)=>{ //Now I see why my mentor said this kata was repetitive, and could use a function
        switch(index){
            case 0:
                armyWorth = armyWorth + +currentRace; // orcs 1 to 1
                break;
            case 1:
                armyWorth = armyWorth + (+currentRace * 2); // men 1 to  2
                break;
            case 2:
                armyWorth = armyWorth + (+currentRace * 2); // wargs 1 to  2
                break;
            case 3:
                armyWorth = armyWorth + (+currentRace * 2); // goblins 1 to  2
                break;
            case 4:
                armyWorth = armyWorth + (+currentRace * 3); // Uruk Hai 1 to  3
                break;
            case 5:
                armyWorth = armyWorth + (+currentRace * 5); // trolls 1 to  5
                break;
            case 6:
                armyWorth = armyWorth + (+currentRace * 10); // Wizards 1 to  10
                break;
        }
        return armyWorth;

    }, 0);
    //check for the result:
    if(goodA > evilA){
        return `Battle Result: Good triumphs over Evil`
    } else if (goodA < evilA){
        return `Battle Result: Evil eradicates all trace of Good`
    } else{
        return `Battle Result: No victor on this battle field`
    };
}
```


## Results

```js

Test Results:
  Solution
    Tie
    Good wins
    Evil wins
Random tests
Completed in 5ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[Firnis](https://www.codewars.com/users/Firnis)*

```js

function goodVsEvil(good, evil) {
  var getWorth = function( side, worth ) {
    return side.split(' ').reduce( function(result, value, index) {
      return result + (worth[index] * value);
    }, 0);
  }

  var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
}

```

## Notes about the interesting one

This one seems to be an old solution, or the author really liked the idea of using the global scope of var, I'd say the second due to the calling of variables declared after the call.
Overall very clean and nice code


---