/*
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

function lengthOfLongestSubstring(s: string) {
   const subArray = [];
    let counter = 0; 
    for(let i=0;i<s.length;i++){
        if(!subArray.includes(s[i])){
            subArray.push(s[i]);
            if(subArray.length > counter){
                counter = subArray.length;
            }
        }else{
            // remove till s[i] if match 
            let index = subArray.indexOf(s[i]);
            subArray.splice(0, index+1);
            subArray.push(s[i]);
        }
    }
    return counter;
}
