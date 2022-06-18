function hasTargetSum(array, target) {
  // Write your algorithm here
    const seenNumbers = new Set(); // start an empty Set
    for (const number of array) {
      const complement = target - number;
      if (seenNumbers.has(complement)) return true;
  
      // .add adds the number to the Set
      seenNumbers.add(number);
    }
    return false;
  }


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
// iterate over the array of Numbers
//   for the present number, identify as a complementary number that adds to the target
//   iterate over the remaining numbers in the array
//     check if its complementary
//       if so return true
//       if Not , return false.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
