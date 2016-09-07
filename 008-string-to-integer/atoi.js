/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {

    const numLookup = {
        "+": 1,
        "-": -1,
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9
    }

    let start = -1;
    let integer = 0;
    let neg = 1;

    for(let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char < "0" || char > "9") {

            // number has ended
            if (start !== -1) {
                break;
            }

            // number has not started
            else {

                // leading whitespace, skip it
                if (char === " ") {
                    // do nothing
                }

                // sign character, set start and sign
                else if (char === "+" || char === "-") {
                    start = i;
                    neg = numLookup[char];
                }

                // leading non-whitespace, returns default
                else {
                    break;
                }

            }
        }
        else {
            // set star if not yet started
            if (start === -1) { start = i; }

            //console.log(char);

            // move integer digits left, add char to end
            integer = (integer * 10) + numLookup[char];
        }
    }

    // apply negation if necessary
    integer *= neg;

    // exceeds maxint
    if (integer > 2147483647) { return 2147483647; }
    if (integer < -2147483648) { return -2147483648; }

    return integer;
};
