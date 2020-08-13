// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
	// -convert into an array
	// -reverse the array
	// -join the array
	
  function reverse(str) {
    return str.split('').reverse().join('')
  }
  

// SOLUTION 2
// 	USE A FOR LOOP

function reverse(str) {
	let reversed = ''
	for (let char of str) {
		reversed = char + reversed
	}
	return reversed
}

// SOLUTION 3
// -using reduce helper

function reverse(str) {
	return str
		.split('')
		.reduce((reversed, character) => character + reversed, '');
}
