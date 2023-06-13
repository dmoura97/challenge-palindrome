import { removeSpecialCharacters } from "./utils/removeSpecialCharacters.js";

export function isPalindrome(text) {
  const textWithoutSpaces = removeSpecialCharacters(text.toLowerCase());
  let start = 0;
  let end = textWithoutSpaces.length - 1;

  while (start < end) {
    if (textWithoutSpaces[start] !== textWithoutSpaces[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
