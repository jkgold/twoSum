
// Two Sum: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2]. // input: [1, 2, 3, 4, 5, 6, 7], 13 // output: [5,6]

// Write tests for it // Some hints to get you started if you want to use Mocha test suite with the Chai Assertion library // npm init // npm install mocha chai --save


function twoSum(arr, target){
  for (var i = 0; i < arr.length; i++){
    for (var j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === target){
        return [i,j];
      }
    }
  }
return "nothing found";
}

module.exports = twoSum;
