import { isPalindrome } from "./palindrome.js";
import { clearConsole, pressEnterToContinue } from "./utils/console.js";
import readlineSync from 'readline-sync'


export function handleOption(option) {
  switch(option) {
    case '1':
      clearConsole()
      console.log('--- Palindrome Verifier ---')

      const input = readlineSync.question('\nEnter a word or phrase: ');

      const result = isPalindrome(input)

      console.log('\n---------------------------')
      console.log(`${result} - The phrase ${result ? 'is' : 'is not'} a palindrome.`)
      console.log('---------------------------');

      pressEnterToContinue()
      return false;

    case '2':
      return true;

    default:
      console.log('\nInvalid option. Please choose a valid option. \n')
      pressEnterToContinue()
      return false;
  }
}