import { removeSpecialCharacters } from "./utils/removeSpecialCharacters.js";

export function isPalindrome(text) {
  const textWithoutSpaces = removeSpecialCharacters(text.toLowerCase());
  let inicio = 0;
  let fim = textWithoutSpaces.length - 1;

  while (inicio < fim) {
    if (textWithoutSpaces[inicio] !== textWithoutSpaces[fim]) {
      console.log(textWithoutSpaces[inicio])
      console.log(textWithoutSpaces[fim])
      return false;
    }
    inicio++;
    fim--;
  }

  return true;
}
