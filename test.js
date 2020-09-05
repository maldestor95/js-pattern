/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let word=[]

    let maxLength=0
    for (let counter=0;counter<s.length;counter++){
        if (word.includes(s[counter])){
            word=word.slice(word.indexOf(s[counter])+1,word.length)
            // if (word.indexOf(s[counter])!=word.length-1){
                word.push(s[counter])
                maxLength=Math.max(maxLength,word.length)
            // }
        }
        else{
                word.push(s[counter])
                maxLength=Math.max(maxLength,word.length)
        }
    }
    return maxLength
    
};

console.log(lengthOfLongestSubstring('abcabcdeabc'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring('bbb'))
console.log(lengthOfLongestSubstring('aab'))