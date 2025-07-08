/*
LeetCode #26 - Remove Duplicates from Sorted Array (Easy)
----------------------------------------
Problem: Given a sorted array nums, remove duplicates in-place such that each element appears only once.
Return the number of unique elements (k).

Example 1:
Input: nums = [1,1,2,3,4]
Output: k = 4, nums = [1,2,3,4,_]

Example 2:
Input: nums = [2,10,10,30,30,30]
Output: k = 3, nums = [2,10,30,_,_,_]

Solution: Two pointers (O(n) time, O(1) space)
*/

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Test case
const nums = [1,1,2,3,4];
console.log(removeDuplicates(nums)); // Output: 4
console.log(nums); // Output: [1,2,3,4]