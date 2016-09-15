/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeTwoLists = function(l1, l2) {

  if (!l1) return l2;
  if (!l2) return l1;

  let merged = new ListNode();
  let ptr = merged;

  while (l1 && l2) {

    if (l1.val < l2.val) {
      ptr.next = l1;
      l1 = l1.next;
    }
    else {
      ptr.next = l2;
      l2 = l2.next;
    }
    ptr = ptr.next;


  }

  ptr.next = (l1 ? l1 : l2);

  return merged.next;
};
