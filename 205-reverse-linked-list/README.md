# 206. Reverse Linked List  

Reverse a singly linked list.

## Solution O(n)

* Iterate through singly-linked list until current node is null
* At each node
  * hold next node in temp value
  * point current node to previous
  * reassign previous to current, current to next
* return previous node (which is not null)
