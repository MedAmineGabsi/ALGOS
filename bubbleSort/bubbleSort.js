// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 5, 3, 2, 1];

function bubbleSort(nums) {
  var check = true
  var check1 = true 
  while(check || check1){
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i+1]){
        var x = nums[i+1]
        nums[i+1] = nums[i]
        nums[i] = x
        check1 = check
        check = true
      } else{
        check = false
      }
    }
  }
  return nums
}
console.log(bubbleSort(nums3))