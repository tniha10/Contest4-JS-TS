{/**An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Given two strings, s1 and s2, determine if they are anagrams of each other.
You should consider the strings to be anagrams if they contain the same letters with the same frequency, regardless of case, spaces, or punctuation. Only alphabetic characters should be considered.

Examples
isAnagram("listen", "silent");
// => true

isAnagram("Hello", "world");
// => false

isAnagram("A decimal point", "I'm a dot in place");
// => true

Example 1
Input: s1 = "listen", s2 = "silent"
Output: true

Example 2
Input: s1 = "Hello", s2 = "world"
Output: false

Constraints
Input strings `s1` and `s2` contain English letters, spaces, and punctuation.
The length of `s1` and `s2` will be between 0 and 1000 characters.*/}

function isAnagram(s1, s2) {
  let cleanedS1 = s1.toLowerCase().replace(/[^a-z]/g, '');
  let cleanedS2 = s2.toLowerCase().replace(/[^a-z]/g, '');

  if (cleanedS1.length !== cleanedS2.length) {
    return false;
  }

  let frequency = {};
  for (let char of cleanedS1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let char of cleanedS2) {
    if (frequency[char] === undefined) {
      return false;
    }
    frequency[char]--;
  }

  return true;
}