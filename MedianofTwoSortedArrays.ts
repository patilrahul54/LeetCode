/* Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]) {
    const mergeResult = [...nums1, ...nums2];
    const sortedArray = mergeResult.sort((n1,n2) => n1 - n2);
    if((sortedArray.length/2) % 1 === 0){
        return ((sortedArray[Number((sortedArray.length/2).toFixed()) - 1] + (sortedArray[Number((sortedArray.length/2).toFixed())])) / 2)
    }else{
        return sortedArray[Number((sortedArray.length/2).toFixed()) - 1]
    }
};
