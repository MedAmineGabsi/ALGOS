// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have EXACTLY ONE SOLUTION,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given arr = [2, 11, 7, 15], target = 9,
// Because arr[0] + arr[2] = 2 + 7 = 9
// return [0, 2].

// example 1
// given: [2, 11, 7, 15]
// target: 9
// output: [0,2]

// example 2
// given: [3,2,4]
// target: 6
// output: [1,2]

// example 3
// given: [3,3]
// target: 6
// output: [0,1]

function twoSums(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    var sum = arr[i];
    var output = [];
    console.log(sum);
    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        j += 1;
        console.log("J pass to " + j);
      }
      sum += arr[j];
      console.log(sum);
      if (sum === target) {
        output.push(i);
        output.push(j);
      } else {
        sum -= arr[j];
        console.log(sum);
      }
    }
    return output;
  }
}
