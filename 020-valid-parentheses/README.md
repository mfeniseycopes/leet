# 20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

## Solution *O(n)*

* Iterate over the string
* Using a stack, push each opening bracket or parenthesis.
* Skip any non-parenthesis
* If a closing bracket or parenthesis is found, check to see if if matches the top of the stack using the `matches` mapping
  * if it matches, pop it off
  * otherwise the string is invalid, return false
* After iterating through entire string, return true if stack is emtpy (every parenthesis found a pair)
