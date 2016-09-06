# 9. Palindrome Number

Determine whether an integer is a palindrome. Do this without extra space

## Solution 0(n)
* Check for immediate fail conditions
  * number is negative
  * divisible by 10 (cannot have a leading zero)
* Iterate through half of digits, creating a reversed right half number
  * Going through only half is controlled by comparing the values of left and right. Once right is greater we have gone through half or half + 1 of the digits
  * Reversing the right half is as easy as multiplying the right by 10 and adding each new digit
* If the remaining input number is equal to the right half reversed, return true
  * Accounts for odd number of digits by checking right half / 10 also
