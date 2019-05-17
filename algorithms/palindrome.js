// const {Stack} = require('stack');
const {Stack} = require('./data_structures/stack');

const isPalindrome = (str) => {
    const letterStack = new Stack();
    for (let letter of str) {
        letterStack.push(letter);
    }
    
    let reversed = ''
    while (!letterStack.isEmpty()) {
        reversed += letterStack.pop();
    }

    let msg = str == reversed ? ' is ' : ' is not ';
    return `'${str}'` + msg + ' a palindrome.';
};

console.log(isPalindrome('titi'));
console.log(isPalindrome('racecar'));