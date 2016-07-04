## Add Two Numbers
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

## Solution : O(n)
* Create new result linked list with dummy head.
* Iterate over the two linked lists, until both nodes are nil, adding new nodes to hold the next digit sum with each iteration.
* Keep track of the carry and adding into subsequent sums.
* If one node is nil, use 0 instead of its val.
* It's also important to remember to include the carry when done iterating.
* Return dummy head's next node.

### Complexity
This is O(n) because we are iterating over two inputs of max size n one time.
