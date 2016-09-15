/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {

  // set prefix and starting index
  let pre = '';
  let idx = 0;

  while (true) {

    // value of character in first array
    let char = strs[0][idx];

    // check character match in each other array
    for (let s = 0; s < strs.length; s++) {

      // return pre if string ended or character doesn't match
      if (strs[s].length <= idx || strs[s][idx] !== char) {
        return pre;
      }

    }

    // move to next character
    pre += first;
    idx++;
  }

  return pre;
};
