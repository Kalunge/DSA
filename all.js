// 1.   STRING REVERSAL
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
function reverse(str) {
	return str.split('').reverse().join('');
}

// SOLUTION 2
function reverse(str) {
	let reversed = '';
	for (char of str) {
		reversed = char + reversed;
	}

	return reversed;
}

// SOLUTION 3
function reverse(str) {
	return str.split('').reduce((reversed, char) => char + reversed, '');
}

// 2. PALINDROME
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION 1
function palindrome(str) {
	let reversed = str.split('').reverse().join('');
	return reversed === str;
}

// SOLUTION 2
function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

// 3. INT REVERSAL
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// SOLUTION 1
function reverseInt(n) {
	let reversed = n.toString().split('').reverse().join('');
	return parseInt(reversed) * Math.sign(n);
}

// SOLUTION 2
function reverseInt(n) {
	let reversed = n.toString().split('').reverse().join('');
	if (n > 0) {
		return parseInt(reversed);
	}
	return parseInt(reversed) * Math.sign(n);
}

// 4. MAXCHAR
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let chars = {};
	let max = 0;
	let maxChar = '';

	// Iterate over the string and map it into an object with the value as the number of times it appears
	for (char of str) {
		if (!chars[char]) {
			chars[char] = 1;
		} else {
			chars[char]++;
		}
	}

	// iterate over the object and set the max char to be the one with the highest value

	for (let key in chars) {
		if (chars[key] > max) {
			max = chars[key];
			maxChar = key;
		}
	}

	return maxChar;
}

// SOLUTION 2
// SAME logic but simplified sol

function maxChar(str) {
	let chars = {};
	let max = 0;
	let maxChar = '';

	// iterate over the str and map it into an object
	for (let char of str) {
		chars[char] = chars[char] + 1 || 1;
	}

	// iterate over the object
	for (let key in chars) {
		if (chars[key] > max) {
			max = chars[key];
			maxChar = key;
		}
	}

	return maxChar;
}
