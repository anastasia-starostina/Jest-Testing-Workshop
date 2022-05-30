import { test, expect } from "@jest/globals";

import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from "./index.js";

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:

//Double and one test 

test(`Given one number, multiply this number by 2 and add 1 to it.`, () => {
  //ARRANGE
  const number = 2;
  const expected= 5
  //ACT  
  const actual = doubleAndAddOne(number);
  //ASSERT
  expect(actual).toBe(expected);
}) 

//Is Long Array Test 

test(`Given one array, if its length exceeds 10, return true, if it is less than 10, return false.`, () => {
  //ARRANGE 
  const array = [1,2,3,4,5,6,7];
  const expected = false;
  //ACT 
  const actual = isLongArray(array);
  //ASSERT
  expect(actual).toBe(expected);
})

//Add Item to Array 
