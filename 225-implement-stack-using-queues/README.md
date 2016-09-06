# 225. Implement Stack using Queues  

Implement the following operations of a stack using queues.

* push(x) -- Push element x onto stack.
* pop() -- Removes the element on top of the stack.
* top() -- Get the top element.
* empty() -- Return whether the stack is empty.

### Notes:

You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.

Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.

You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).

## Solution O(n) for push, O(1) for others
Uses single queue which cycles on push to simulate stack ordering
* push(x) -- push element to end of queue. Dequeue and enqueue elements until x is the head element (length of queue - 1 times)
* pop() -- queue is in stack order, just dequeue the first element
* top() -- return value at index 0 of queue
* empty() -- return true if length of queue is zero
