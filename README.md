# maya-weekend-heallth-interview

## problem statement

Implement a function named **`findWords`** that accepts two arguments: 1) an input string and 2) a dictionary. This function should return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

## Solution

```
function findWords(inputString: string, dictionary:string[]): string[]
```

First create a map using the `inputString` where each letter is a key to the map and the number of ocurrences is the value. For each word
in the dictoinary, iterate through the letters, test to see if the letter is our `inputString` and has a non-zero occurernce. If so, decrease the occurrence in the letter map by 1 until it becomes zero.

This solution has the computational compllexity of N + M \* L

-   N is the number of letters in `inputString` (The letter map mentioned above is only built once.)
-   M is the number of words in the `dictionary`
-   L is the maximum number of letters of any word in the dictionary

## Local environment setup

Install a package manager like [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [asdf](https://asdf-vm.com/) (highly recommended).

Install [nodeJS](https://nodejs.org/en/download/package-manager) and install something relatively recent. Make sure that you have `npx`.

Install typescript globally `npm install -g typescript`

Herre is what my environment dependencies look like:

```
node -v
v22.1.0

npx -v
10.7.0

tsc -v
Version 5.4.5
```

1. On your local machine, open up a terminal. Download the code to your code directory.

```
git clone git@github.com:MayaLi/maya-weekend-heallth-interview.git
```

2. Install dependencies by running `npm install`. You should see a new `npm_modules` folder with dependency packages

## How to run the solution

Use `npm run app` to kick off the app. There are two requierd inputs, `input` (or `-i`) and `dictionary` (or `-d`).
For example:

```
 npm run app -- -i hi -d weekend,health
```

## How to run test

```
npm run test
```

## Future work

-   We may want to throw or ignore non-alpha character inputs
-   Decide what the behavior should be for capitalized letters in either the input or dictionary
