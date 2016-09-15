/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let front = new ListNode();
    front.next = head;

    let fast = front;
    let slow = fast;

    // move fast n nodes ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // move to end
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // skip over nth node
    slow.next = slow.next.next;

    // return head
    return front.next;
};
