{/**Write a function that takes a string and replaces consecutive repeating characters with the character followed by the count. If a character appears only once, do not append a number.

Examples
compressCharacters("aaabbc")
// Expected output: "a3b2c"

compressCharacters("hello")
// Expected output: "he2llo"

Example 1
Input: str = "aaabbc"
Output: "a3b2c"

Example 2
Input: str = "hello"
Output: "hel2o"

Constraints
The input string `str` will contain only lowercase English letters.
The length of `str` will be between 0 and 1000 characters. */}

function compressCharacters(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let count = 1;
        while (i + 1 < str.length && str[i] === str[i + 1]) {
            count++;
            i++;
        }
        result += str[i];

        if (count > 1) {
            result += count;
        }
    }
    return result;
}