# 7th Kata -- A Needle in the Haystack






by *[andrewMacmurray](https://www.codewars.com/users/andrewMacmurray)*


## Task

### A Needle in the Haystack


Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)
```js
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
```
Note: In COBOL, it should return "found the needle at position 6"





## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
  });
});

```


## Notes

not much to see just an introduction to indexOf()

## My solution with comments:

```js

function findNeedle(haystack) {
    return (`found the needle at position ${haystack.indexOf('needle')}`);
}
```


## Results

```js

Time: 859ms Passed: 1Failed: 0
Test Results:
Tests
test
Completed in 2ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[Swivelgames](https://www.codewars.com/users/Swivelgames)*

```js

var a = "a";
var b = "b";
var c = "c";
var d = "d";
var e = "e";
var f = "f";
var g = "g";
var h = "h";
var i = "i";
var j = "j";
var k = "k";
var l = "l";
var m = "m";
var n = "n";
var o = "o";
var p = "p";
var q = "q";
var r = "r";
var s = "s";
var t = "t";
var u = "u";
var v = "v";
var w = "w";
var x = "x";
var y = "y";
var z = "z";
var space = " ";

var theWordNeedleWhichWillNeedToBeFoundWithinTheHaystackContainingTheNeedle = [].concat(n).concat(e).concat(e).concat(d).concat(l).concat(e).join('');
var returnStringPrefix = [].concat(f).concat(o).concat(u).concat(n).concat(d).concat(space).concat(t).concat(h).concat(e).concat(space).concat(n).concat(e).concat(e).concat(d).concat(l).concat(e).concat(space).concat(a).concat(t).concat(space).concat(p).concat(o).concat(s).concat(i).concat(t).concat(i).concat(o).concat(n).concat(space).join('');

function findNeedle ( theHaystackContainingTheNeedle )
{
  var indexOfNeedleWithinTheHaystackContainingTheNeedle = -1;
  var numberOfStrawsPlusTheNeedleThatAreContainedWithinTheGiantHaystackContainingTheNeedleWhichIsProbablyLocatedInAFieldSomewhereNearABarnOnAFarmPotentiallyWithinTheVicinityOfRuralTexas = getLengthOfArrayContainingElements( theHaystackContainingTheNeedle );
  for(
    var currentIndexOfTheCurrentlyExecutingForLoop = 0;
    currentIndexOfTheCurrentlyExecutingForLoop <= numberOfStrawsPlusTheNeedleThatAreContainedWithinTheGiantHaystackContainingTheNeedleWhichIsProbablyLocatedInAFieldSomewhereNearABarnOnAFarmPotentiallyWithinTheVicinityOfRuralTexas;
    currentIndexOfTheCurrentlyExecutingForLoop = currentIndexOfTheCurrentlyExecutingForLoop + 1
  )
  {
    if(currentIndexOfTheCurrentlyExecutingForLoop < 0)
    {
      throw new Error("This shouldn\"t happen".replace("\u0022","\u2019"));
    }

    if(currentIndexOfTheCurrentlyExecutingForLoop > numberOfStrawsPlusTheNeedleThatAreContainedWithinTheGiantHaystackContainingTheNeedleWhichIsProbablyLocatedInAFieldSomewhereNearABarnOnAFarmPotentiallyWithinTheVicinityOfRuralTexas)
    {
      throw new Error("This shouldn\"t happen".replace("\u0022","\u2019"));
    }
    
    var theValueOfTheCurrentStrawOrNeedleThatResidesWithinTheLargeHaystack = getElementFromArrayGivenIndex( theHaystackContainingTheNeedle, currentIndexOfTheCurrentlyExecutingForLoop );

    if( theValueOfTheCurrentStrawOrNeedleThatResidesWithinTheLargeHaystack === theWordNeedleWhichWillNeedToBeFoundWithinTheHaystackContainingTheNeedle) {
      indexOfNeedleWithinTheHaystackContainingTheNeedle = currentIndexOfTheCurrentlyExecutingForLoop;
    }
  }

  var theCompleteReturnValueContainingTheReturnPrefixAndTheIndexOfTheNeedleWithinTheHaystackContainingTheNeedle = returnStringPrefix.split('').concat(indexOfNeedleWithinTheHaystackContainingTheNeedle).join('');
  
  return theCompleteReturnValueContainingTheReturnPrefixAndTheIndexOfTheNeedleWithinTheHaystackContainingTheNeedle;
}

function getElementFromArrayGivenIndex( arrayContainingElements, indexToRetrieveFromArrayContainingElements )
{
  var valueFromArrayWhereIndexWasBeingSearchedFor = -1;
  var numberOfElementsInArrayContainingElements = getLengthOfArrayContainingElements(arrayContainingElements);
  for(
    var currentIndexOfTheCurrentlyExecutingForLoop = 0;
    currentIndexOfTheCurrentlyExecutingForLoop <= numberOfElementsInArrayContainingElements;
    currentIndexOfTheCurrentlyExecutingForLoop = currentIndexOfTheCurrentlyExecutingForLoop + 1
  )
  {
    if(currentIndexOfTheCurrentlyExecutingForLoop < 0)
    {
      throw new Error("This shouldn\"t happen".replace("\u0022","\u2019"));
    }

    if(currentIndexOfTheCurrentlyExecutingForLoop > numberOfElementsInArrayContainingElements)
    {
      throw new Error("This shouldn\"t happen".replace("\u0022","\u2019"));
    }
    
    var valueBasedOnCurrentIndexOfTheArrayThatIsCurrentlyBeingReferencedWithinTheExecutingForLoop = arrayContainingElements[ currentIndexOfTheCurrentlyExecutingForLoop ];

    if(currentIndexOfTheCurrentlyExecutingForLoop === indexToRetrieveFromArrayContainingElements)
    {
      valueFromArrayWhereIndexWasBeingSearchedFor = valueBasedOnCurrentIndexOfTheArrayThatIsCurrentlyBeingReferencedWithinTheExecutingForLoop;
    }
  }
  
  return valueFromArrayWhereIndexWasBeingSearchedFor;
}

function getIndexFromArrayGivenValue( arrayContainingElements, valueForWhichToUseToFindTheIndexAndRetrieveItFromArrayContainingElements )
{
  var indexFromArrayWhereValueWasFound = -1;
  var numberOfElementsInArrayContainingElements = getLengthOfArrayContainingElements(arrayContainingElements);
  for(
    var currentIndexOfTheCurrentlyExecutingForLoop = 0;
    currentIndexOfTheCurrentlyExecutingForLoop <= numberOfElementsInArrayContainingElements;
    currentIndexOfTheCurrentlyExecutingForLoop = currentIndexOfTheCurrentlyExecutingForLoop + 1
  )
  {
    if(indexFromArrayWhereValueWasFound > -1)
    {
      continue;
    }

    var valueBasedOnCurrentIndexOfTheArrayThatIsCurrentlyBeingReferencedWithinTheExecutingForLoop = getElementFromArrayGivenIndex( arrayContainingElements, currentIndexOfTheCurrentlyExecutingForLoop );

    if( valueBasedOnCurrentIndexOfTheArrayThatIsCurrentlyBeingReferencedWithinTheExecutingForLoop === valueForWhichToUseToFindTheIndexAndRetrieveItFromArrayContainingElements )
    {
      indexFromArrayWhereValueWasFound = currentIndexOfTheCurrentlyExecutingForLoop;
    }
  }
  
  return indexFromArrayWhereValueWasFound;
}

function getLengthOfArrayContainingElements( arrayContainingElementsForWhichToRetreiveTheLengthFrom )
{
  var theLengthOfTheArrayContainingElementsForWhichToRetreiveTheLengthFrom = arrayContainingElementsForWhichToRetreiveTheLengthFrom.length;

  if(theLengthOfTheArrayContainingElementsForWhichToRetreiveTheLengthFrom < 0)
  {
    theLengthOfTheArrayContainingElementsForWhichToRetreiveTheLengthFrom = 0;
  }

  return theLengthOfTheArrayContainingElementsForWhichToRetreiveTheLengthFrom;
}
```

## Notes about the interesting one:

This has to be the most overcomplicated flex I've seen in code

---