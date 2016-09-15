/**
* @param {string} s
* @return {number}
*/
var romanToInt = function(s) {

  // maps roman numeral to integer
  let mapping = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  // initialize to zero
  let num = 0;
  let last_val = 0;

  // iterate through the numerals
  for (let i = 0; i < s.length; i++) {
    // get integer value from mapping
    let val = mapping[s[i]];

    // handle special case where previous value lower than value
    // this is the one less than N case (IV, IX, ...)
    if (val > last_val) {
      num += (val - (2 * last_val));
    }
    // normal case, just increment
    else {
      num += val;
    }

    // update previous value
    last_val = val;
  }

  return num;
};
