# 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

## Solution

* Initialize prefix to empty string
* Loop through all indexes in the strings
* In each iteration check that each letter matches
  * if it does, append to prefix
  * otherwise break out of loop
* Return prefix
