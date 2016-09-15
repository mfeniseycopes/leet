# 13. Roman to Integer

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

## Solution

* Just sum up the values of the numerals as you read them.
* Keep track of previous value, if less than current, subtract previous and add (current - previous)
