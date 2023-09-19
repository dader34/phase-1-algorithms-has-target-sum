function hasTargetSum(array, target) {
  let seen = new Set()
  for(let i = 0;i<array.length;i++){
    const compliment = target - array[i]
    if(seen.has(compliment)){
      return true
    }
    seen.add(array[i])
  }
  return false
}

/* 
  o(n) time complexity because its one for loop and .has() has linear time complexity
*/

/* 
  create set 
  for element of array
  if item is not in set, add it
  compliment = target - num
  if compliment exists in set , return true
  return false
*/

/*
  a new set is created with nothing in it because we dont need key, and value, only one
  loop through the array and look for the complement number aka the number that plus our current index equals the target
  if the set contains the compliment, return true, else, add the current index to our set
  otherwise return false
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
