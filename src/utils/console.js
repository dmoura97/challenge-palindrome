import readlineSync from 'readline-sync'

export function pressEnterToContinue() {
  readlineSync.question('\nPress Enter to continue...');
}

export function clearConsole() {
  console.clear();
}