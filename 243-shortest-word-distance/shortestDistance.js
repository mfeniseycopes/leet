/**
* @param {string[]} words
* @param {string} word1
* @param {string} word2
* @return {number}
*/
var shortestDistance = function(words, word1, word2) {

  // initialize defaults
  let idx1 = -1;
  let idx2 = -1;
  let min = words.length; // assume that both words in list

  // iterate through array
  for (let i = 0; i < words.length; i++) {
    // update min if word1 found
    if (words[i] === word1) {
      idx1 = i;
      if (idx2 !== -1) {
        let distance = Math.abs(idx1 - idx2);
        if (distance < min) min = distance;
      }
    }
    // update min if word 2 found
    else if (words[i] === word2) {
      idx2 = i;
      if (idx1 !== -1) {
        let distance = Math.abs(idx1 - idx2);
        if (distance < min) min = distance;
      }
    }
  }

  return min;
};
