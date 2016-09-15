/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let matches = {
        '}': '{',
        ')': '(',
        ']': '['
    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {

        let bracket = s[i];
        let match = matches[bracket];

        if (match && match === stack[stack.length - 1]) {
            stack.pop();
        }
        else {
            stack.push(bracket);
        }

    }


    return stack.length === 0;
};
