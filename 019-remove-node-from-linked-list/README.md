# 19. Remove Nth Node From End of List

Given a linked list, remove the nth node from the end of list and return its head.

For example,
```
   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
```

Note:
Given n will always be valid.
Try to do this in one pass.

## Solution *O(n)*

* NOTE: Not given length of list and cannot go backwards in the list
* To find end of list, look for node such that `node.next == null`
* Send a runner k nodes into the list
* Set a 2nd runner at the head of the list
* Move both runners one node at the same time.
* When the 1st runner is at the nth node the 2nd runner will be at the (n-k)th node
