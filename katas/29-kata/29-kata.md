# 29th Kata -- Extract the domain name from a URL






by *[xianpants](https://www.codewars.com/users/xianpants)*


## Task

### Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


```
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
```


## Test Examples

```js

const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })
})

```


## Notes

This one was hard without understanding regex, I think the moment of me learning regex is comming.

## My solution with comments:

```js

function domainName(url){

    if (url.startsWith('http')){ // check if the domain includes the protocol and divide the url in 2
        url = url.split('://')
        url = url[1]
        console.log(url)
    }
    url = url.split('.',2) // divide with points, this will allow me to address subdomains and sub TLDs
    console.log(url)
    if (url[1].length <= 3){ // this will take care of single clasical TLDs (does not account for the new TLDs like .shop .studio etc)
        return url[0]
    } else {
        if(url[1].includes('/')){// if the second part includes subdirectories, we know with enough certainty for the test the domain did not had a subdomain
        return url[0]
        } else {
            return url[1] //if there are no  subdirectories and the second part is longer than 2 or 3 we know this is the domain (at least for no new domains)
        }
    }
}
```


## Results

```js

Time: 869ms Passed: 41Failed: 0
Test Results:
Basic test
Random tests
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[lilixiaoxx](https://www.codewars.com/users/lilixiaoxx)*

```js

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
```

## Notes about the interesting one:

Quite clever to use replace we will in this sense replace the parts that we don't want, but this does not account for subdomains different than the www. I account for different subdomains, but not for domains shorter than 3 letters so the scope of both solutions is really narrow, which prompts me again for the necessity of using regex


---