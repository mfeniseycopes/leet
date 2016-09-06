## ZigZag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
```
string convert(string text, int nRows);
```

## Solution O(n)
* Iterate over the characters in the zigzag string
* Starts at the topleft of a zig and reads at decreasing row and increasing column until row number is hit
* Do the same going upwards
* Repeat until all characters consumed and placed into conversion string
