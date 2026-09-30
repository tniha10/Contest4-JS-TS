{/**Write a function titleCaseSentence that takes a string as input and returns a new string where the first letter of each word is capitalized, and the rest of the letters in each word are lowercase.
Words are separated by one or more spaces. Leading or trailing spaces, and multiple spaces between words, should be handled gracefully, resulting in a single space separating the title-cased words.

Examples
titleCaseSentence("hello world");
// Expected output: "Hello World"

titleCaseSentence("a short sentence");
// Expected output: "A Short Sentence"

Example 1
Input: str = "hello world"
Output: "Hello World"

Example 2
Input: str = "a short sentence"
Output: "A Short Sentence"

Constraints
The input `str` will be a string. */}

function titleCaseSentence(str) {
 
    let words = str.toLowerCase().split(" ");
    let result = "";

    for (let word of words) {
        if (word === "") {
            continue;
        }

    let capitalized = word[0].toUpperCase() + word.slice(1);
    
    if (result !== "") {
            result += " ";
        }
        result += capitalized;
    }

    return result;
}