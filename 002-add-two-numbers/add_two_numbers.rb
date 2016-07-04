# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}

def add_two_numbers(l1, l2)
  # # initial setup
  carry = 0
  head = ListNode.new(nil) # dummy

  # current node on linked list
  current = head

  # until end of both linked lists reached
  until l1.nil? && l2.nil?
    # if either is nil, will not contribute to sum
    l1_val = (l1 ? l1.val : 0)
    l2_val = (l2 ? l2.val : 0)

    # get next digit
    digit_sum, carry = digit_and_carry(l1_val, l2_val, carry)

    # create and move to next node
    next_node = ListNode.new(digit_sum)
    current.next = next_node
    current = current.next

    # move to next node exists
    l1 = l1.next if l1
    l2 = l2.next if l2
  end

  current.next = ListNode.new(carry) if carry != 0

  # return first node of linked list
  head.next
end

# helper method: computes digit sum and carry
def digit_and_carry(num1, num2, carry)
  digit_sum = num1 + num2 + carry
  carry = digit_sum / 10
  digit_sum = digit_sum % 10

  [digit_sum, carry]
end
