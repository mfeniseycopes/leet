# 8. String to Integer (atoi)  

Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

## Solution O(n)

* initialize start (index) to -1, integer to 0
* iterate through the characters one by one
  * while start is -1, skip over whitespace
  * if '+' or '-' or number, set start to current index
    * set negative, positive if '-', '+'
    * add digit to integer if number
  * if character is not a number and start is set, break out of loop
* apply negation
* return max value if exceeded, otherwise return integer
