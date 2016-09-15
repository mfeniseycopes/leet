# 21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

## Solution *O(m + n)*

* Create a new mergedList by creating an empty node
* Create three pointers, one to stay at the end of the merged list, the other to move through the two sorted lists
* Until one of the sorted list pointers is null
  * Have merge list node's next point to to smallest of the two sorted list nodes
  * Move merged and sorted list to next node
