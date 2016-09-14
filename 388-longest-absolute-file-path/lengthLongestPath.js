/**
* @param {string} input
* @return {number}
*/
var lengthLongestPath = function(input) {

  // initialize base stack element
  const folderStack = [{ totalLength: 0, depth: 0 }];

  // initialize max to zero
  let max = 0;
  let currentDepth = 1;
  let currentLength = 0;
  let isFile = false;

  // initialize current line start idx
  let start = 0;

  for (let i = 0; i <= input.length; i++) {

    let char = input[i];

    // new line
    if (char === '\n' || i === input.length) {
      // finish last line
      let totalLength = currentLength + folderStack[folderStack.length - 1].totalLength;
      if (isFile) {
        if (totalLength > max) {
          max = totalLength;
        }
      } else {
        // add one for '/' after foldername
        folderStack.push({  totalLength: totalLength + 1, depth: currentDepth });
      }

      // reset next line
      isFile = false;
      currentDepth = 1;
      currentLength = 0;
    }
    // find depth
    else if (char === '\t') {
      currentDepth++;
    }
    // it's a file
    else {
      // correctly set depth if first char
      if (currentLength === 0) {
        // pop stack until currentDepth 1 greater than top of stack (nested once)
        while (currentDepth <= folderStack[folderStack.length - 1].depth) {
          folderStack.pop();
        }
        start = i;
      }

      // set as file
      if (char === '.') {
          isFile = true;
      }

      // increase length
      currentLength++;
    }
  }

  return max;
};
