'use strict';

var question1 = prompt('Does Remil have any cats?').toLowerCase();

if (question1 === 'yes' || question1 === 'y') {
  alert('Sorry but you\'re wrong, Remil doesn\'t have any pets');
} else if (question1 === 'no' || question1 === 'n') {
  alert('You are right, Remil doesn\'t have any pets but had a family dog growing up');
} else {
  alert('Try to answer with a yes/y or no/n next time');
}
