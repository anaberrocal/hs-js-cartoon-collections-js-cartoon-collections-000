## Objectives

You're going to get familiar with iterating through arrays in Javascript.

## Instructions

There are four functions to complete in this lab:

1. Dwarf Roll Call
2. Summon Captain Planet
3. Long Planeteer Calls
4. Find the Cheese

#### Function 1 - Dwarf Roll Call

![dwarves](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/cartoon-collections/dwarves.jpg)

This function should accept an array of dwarf names, for instance:

```js
["Doc", "Dopey", "Bashful", "Grumpy"]
```

It should then return a string with the numbered dwarves. The string should look like this:

> "1. Doc 2. Dopey 3. Bashful 4. Grumpy "

#### Function 2 - Summon Captain Planet

![captain-planet](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/cartoon-collections/captain-planet.jpeg)

This function should accept an array of planeteer calls, like this:

```js
planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
```

It should then convert each element to uppercase and add an exclamation point at the end. The return value of this method should be an array, in this example:

```
summonCaptainPlanet(planeteerCalls)
#=> ["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]
```

Once the test for this method is passing, move on to the next method, long planeteer calls.

#### Function 3 - Long Planeteer Calls

The `longPlaneteerCalls` method should accept an array of calls. The function should tell us if any of the calls are longer than four characters. For example:

```js
shortWords = ["windd", "fire"]
longPlaneteerCalls(short_words)
#=> false

assortedWords = ["earth", "wind", "heart", "fire"]
longPlaneteerCalls(assorted_words)
#=> true
```

Notice the return value of this method is either false or true, depending on the array it was given as an argument.

Once the test for this method is passing, move on to the last function.

#### Method 4 - Find the Cheese

![dancing-mice](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/cartoon-collections/cheese.jpg)

The "findTheCheese" function should accept an array of strings. It should then look through these strings and return the first string that is a type of cheese. The types of cheese that appear are  cheddar, gouda, and camembert.

For example:

```js

snacks = ["crackers", "gouda", "thyme"]
findTheCheese(snacks)
#=> "gouda"

soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"]
findTheCheese(soup)
#=> "cheddar"
```

If, sadly, a list of ingredients does not include cheese, return "no cheese!":

```js
ingredients = ["garlic", "rosemary", "bread"]
findTheCheese(ingredients)
#=> null
```

You can assume that all strings will be lower-case.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/hs-js-cartoon-collections' title='Objectives'>Objectives</a> on Learn.co and start learning to code for free.</p>
