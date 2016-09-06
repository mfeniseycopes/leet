# 7. Reverse Integer

Reverse digits of an integer.

Example1: `x = 123, return 321`

Example2: `x = -123, return -321`

## Solution O(n)
* If number is overflowed, return 0
* Initialize reversed number to zero
* Iterate over each digit right to left using modulus and dividing by 10
  * Set reverse = (reverse * 10) + digit
  * This shifts each digit left and inserts new digit into ones place
* If reversed number overflows, return 0
* Return reversed number
