function isPalindrome(word) {
  // Write your algorithm here
  let forwardArray = word.split('');
  let reverseArray = [...forwardArray];
  reverseArray.reverse();
  reverseWord = reverseArray.join('');
  return word === reverseWord
}

/* 
  Add your pseudocode here
split word into array
create second array using spread operator
reverse second array
join letters of second array into reverse word
compare word to reverse word
*/

/*
  Add written explanation of your solution here
  The function turns the word into an array, then creates a second array that is the reverse of the first array, then creates a new string from the second array and compares it with the original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome('mississippi'))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
