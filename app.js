'use strict';

alert('Quiz: How well do you know Remy?');

var correctResponses = 0;
var numberOfQuestions = 5;

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
