// 1403. Minimum Subsequence in Non-Increasing Order



// Given the array "nums", obtain a subsequence of the array whose sum of elements is strictly greater
// than the sum of the non included elements in such subsequence.

// If there are multiple solutions, return the subsequence with the minimum size and if there still exit
// multiple solutions, return the subsequence with the maximum total sum of all its elements.
// A subsequence of an array can be obtained by erasing some (possible zero) elements from the array.

// Note that the solution with the given constraints is guaranteed to be unique.
// Also return the answer sorted in non-increasing order.





/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    // Step 1: Calculate the total sum of the array
    let totalSum = nums.reduce((acc, val) => acc + val, 0);

    // Step 2: Sort the array in descending order
    nums.sort((a, b) => b - a);

    // Step 3: Select elements to form the subsequence
    let subsequence = [];
    let subsequenceSum = 0;

    for (let num of nums) {
        subsequenceSum += num;
        subsequence.push(num);
        if (subsequenceSum > totalSum / 2) {
            break;
        }
    }

    return subsequence;
};
