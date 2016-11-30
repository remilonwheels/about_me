'use strict';

var username = prompt('Whats up! What\'s your name?');
alert('Hey ' + username + '\nHere\'s a quiz to learn more about me');

var correctResponses = 0;
var numberOfQuestions =  5;

var response1 = prompt('Does Remil have any cats?').toLowerCase();
if (response1 === 'yes' || response1 === 'y') {
  alert('Sorry but you\'re wrong, Remil doesn\'t have any pets');
  console.log('Question 1: incorrect; User Response: ' + response1);
} else if (response1 === 'no' || response1 === 'n') {
  alert('You are right, Remil doesn\'t have any pets but had a family dog growing up');
  console.log('Question 1: correct; User Response: ' + response1);
  correctResponses++;
} else {
  alert('Try to answer with a yes/y or no/n next time');
  console.log('Question 1: incorrect; User Response: ' + response1);
}

var response2 = prompt('Does Remil have an Android phone?').toLowerCase();
if (response2 === 'yes' || response2 === 'y') {
  alert('Sorry but you\'re wrong, Remil rocks an iPhone');
  console.log('Question 2: incorrect; User Response: ' + response2);
} else if (response2 === 'no' || response2 === 'n') {
  alert('You are right, Remil rocks an iPhone');
  console.log('Question 2: correct; User Response: ' + response2);
  correctResponses++;
} else {
  alert('Try to answer with a yes/y or no/n next time');
  console.log('Question 2: incorrect; User Response: ' + response2);
}

var response3 = prompt('Does Remil have a Windows computer?').toLowerCase();
if (response3 === 'no' || response3 === 'n') {
  alert('Sorry but you\'re wrong, Remil indeed uses Windows');
  console.log('Question 3: incorrect; User Response: ' + response3);
} else if (response3 === 'yes' || response3 === 'y') {
  alert('You are right, Remil uses Windows');
  console.log('Question 3: correct; User Response: ' + response3);
  correctResponses++;
} else {
  alert('Try to answer with a yes/y or no/n next time');
  console.log('Question 3: incorrect; User Response: ' + response3);
}

var response4 = prompt('Does Remil play tennis?').toLowerCase();
if (response4 === 'no' || response4 === 'n') {
  alert('Sorry but you\'re wrong, Remil loves tennis');
  console.log('Question 4: incorrect; User Response: ' + response4);
} else if (response4 === 'yes' || response4 === 'y') {
  alert('You are right, Remil loves tennis');
  console.log('Question 4: correct; User Response: ' + response4);
  correctResponses++;
} else {
  alert('Try to answer with a yes/y or no/n next time');
  console.log('Question 4: incorrect; User Response: ' + response4);
}

var response5 = prompt('Can Remil solve a Rubik\'s cube?').toLowerCase();
if (response5 === 'yes' || response5 === 'y') {
  alert('Sorry but you\'re wrong, Remil can\'t solve it');
  console.log('Question 5: incorrect; User Response: ' + response5);
} else if (response5 === 'no' || response5 === 'n') {
  alert('You are right, Remil can\'t solve it');
  console.log('Question 5: correct; User Response: ' + response5);
  correctResponses++;
} else {
  alert('Try to answer with a yes/y or no/n next time');
  console.log('Question 5: incorrect; User Response: ' + response5);
}

console.log('Correct Responses: ' + correctResponses + ' out of ' + numberOfQuestions);
