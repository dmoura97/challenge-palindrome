import  readlineSync from 'readline-sync'
import { clearConsole } from './utils/console.js';
import { handleOption } from './menuHandler.js';
import { displayMenu } from './utils/displayMenu.js'


let exit = false;

while(!exit) {
  clearConsole()
  console.log('--- Palindrome Verifier ---')
  displayMenu()

  const option = readlineSync.question('Choose an option: ')

  exit = handleOption(option);
}

console.log('\nThe program has been terminated.')