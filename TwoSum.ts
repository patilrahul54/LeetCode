/* given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

function twoSum(nums: number[], target: number) {
   let ind1= 0;
   let ind2=0;
   for (let index = 0; index < nums.length-1; index++) {
        for (let j = 1; j < nums.length; j++) {
            if(index !== j){
                if((nums[index] + nums[j]) === target){
                    ind1 = index;
                    ind2 = j;
                }
            }
        }
   }
   return [ind1,ind2];
};
