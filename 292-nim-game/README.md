# 292. Nim Game

You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.

## Solution *O(1)*

So the trick here is the number 4. We know that if our argument, n, is 1, 2, or 3 (< 4) we can take all the stones and win the game. If there are 4 stones, our move will leave < 4 remaining stones for our friend, who can then take them all and win the game. So we want to find those n, such that after some even number of turns (still our turn) we can guarantee that the remainder is less than 4 and we can win.

Using some guesswork and deduction, let's postulate that all factors of four can be won by our friend and all non-factors of 4 can be won by us.

There are 2 cases: n % 4 == 0 and n % 4 != 0

### n % 4 == 0
It is our move, we choose 1-3 stones. Our friend can then choose the complement to reduce the stone count to another factor of 4. They repeat until stone count equals four and we lose the game.

### n % 4 != 0
It is our move, we choose 1-3 stones, reducing the stone count to a factor of 4. We repeat until stone count equals four and win the game.
