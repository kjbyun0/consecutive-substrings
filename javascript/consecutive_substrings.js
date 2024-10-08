// function consecutiveSubstrings(string) {
//   // type your code here
//   const res = [];
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i; j < string.length; j++) {
//       res.push(string.slice(i, j+1));
//     }
//   }
//   return res;
// }

function consecutiveSubstrings(string) {
  // type your code here
  const res = [];
  const arr = string.split('');

  arr.forEach((ch, i) => {
    let substr = ch;
    res.push(substr);
    arr.slice(i+1).forEach((ch2, i) => {
      substr += ch2;
      res.push(substr);
    });
  });

  return res;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log('');
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log('');
  console.log("Expecting: [a, ab, b]");
  console.log("=>", consecutiveSubstrings('ab'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
