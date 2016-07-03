## Scramble String

Given a string str1, we may represent it as a binary tree by partitioning it to
two non-empty substrings recursively.

Below is one possible representation of str1 = "great":
```
    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
```
To scramble the string, we may choose any non-leaf node and swap its two
children.

For example, if we choose the node "gr" and swap its two children, it produces
a scrambled string "rgeat".
```
----rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
          ```
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it
produces a scrambled string "rgtae".
```
----rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
```
We say that "rgtae" is a scrambled string of "great".

Given two strings str1 and str2 of the same length, determine if str2 is a scrambled
string of str1.

## Solution
This one took me waay to long. By looking at the tree structure we can determine
that recursion is a potential solution.

### Recursion
By looking at `str1`, we know that it divides into `left1` and `right1`. This is
dependent upon where the split occurs (`i`). str2 will be split the same
way (`left2, right2`). Now comes the recursive call. if `left1`, `left2` and
`right1`, `right2` are scrambles of eachother. Then we can define `str1` and `str2`
as scrambles of eachother. If this is not the case it may be due to a 'swap'
occurring. In which case `left1`, `right2` and `right1`, `left2` are scrambles
of eachother.

### Base case
Trivially, the base case is when `str1` and `str2` are both of length 1. Returning
the result of str1 == str2. We can escape a recursive dive a little easier by
comparing character counts at each successive call.
