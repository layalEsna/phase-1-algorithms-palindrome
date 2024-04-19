// function isPalindrome(word) {
//   let arr = word.split('')
//   let reversed = [...arr].reverse()
//   if (arr.join('') === reversed.join('')) {
//     return true
//   }
//   return false
// }

function isPalindrome(word) {


  let wordArr = word.split('')
  let reversed = []
  for (let i = 0; i < wordArr.length; i++) {
    //console.log(word[i])
    reversed.push(wordArr[wordArr.length - 1 - i])


  }

  return (wordArr.join('') === reversed.join(''))
}

//console.log(isPalindrome('abc'))
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  creating new array to push words into array backward!!!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
