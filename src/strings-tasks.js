/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 */
function getStringLength(value) {
  if (value === null || value === undefined) return 0;
  return String(value).length;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the result of concatenation of two strings.
 */
function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

/**
 * Returns the first character of the given string.
 */
function getFirstChar(value) {
  return value ? value.charAt(0) : '';
}

/**
 * Removes leading and trailing whitespace characters from the string.
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Removes only leading whitespace characters from the string.
 */
function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

/**
 * Removes only trailing whitespace characters from the string.
 */
function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

/**
 * Returns a string that is repeated the specified number of times.
 */
function repeatString(str, times) {
  if (times <= 0) return '';
  return str.repeat(times);
}

/**
 * Remove the first occurrence of a substring from a string.
 */
function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

/**
 * Remove the last occurrence of a substring from a string.
 */
function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

/**
 * Calculate the sum of character codes of the given string.
 */
function sumOfCodes(str) {
  if (!str) return 0;
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

/**
 * Checks if a string starts with a specific substring.
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}

/**
 * Checks if a string ends with a specific substring.
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 */
function formatTime(minutes, seconds) {
  const format = (num) => num.toString().padStart(2, '0');
  return `${format(minutes)}:${format(seconds)}`;
}

/**
 * Returns a string in reverse order.
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Returns a string with characters in alphabetical order.
 */
function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

/**
 * Checks if a given string contains a specified substring.
 */
function containsSubstring(str, substring) {
  return str.includes(substring);
}

/**
 * Returns the number of vowels in the string.
 */
function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  let count = 0;
  str.split('').forEach((char) => {
    if (vowels.includes(char)) {
      count += 1;
    }
  });
  return count;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 */
function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

/**
 * Find the longest word in the sentence.
 */
/**
 * Find the longest word in the sentence.
 */
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ''
  );
}

/**
 * Returns the string where each word is reversed.
 */
function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

/**
 * Inverts the case of each character in the given string.
 */
/**
 * Inverts the case of each character in the given string.
 */
function invertCase(str) {
  return str
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 */
function extractNameFromTemplate(value) {
  return value.replace('Hello, ', '').replace('!', '');
}

/**
 * Remove the first and last angle brackets from tag string
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Encode specified string with ROT13 cipher
 */
function encodeToRot13(str) {
  return str
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + 13) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + 13) % 26) + 97);
      }
      return char;
    })
    .join('');
}

/**
 * Returns playid card id.
 */
function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suit = value[value.length - 1];
  const rank = value.slice(0, value.length - 1);
  const suitIndex = suits.indexOf(suit);
  const rankIndex = ranks.indexOf(rank);
  return suitIndex * 13 + rankIndex;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
