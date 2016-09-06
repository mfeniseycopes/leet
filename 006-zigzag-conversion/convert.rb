# @param {String} s
# @param {Integer} num_rows
# @return {String}

def convert(s, num_rows)
  return s if num_rows == 1
  # each s in the array will hold one row of characterss
  zigzag = Array.new(num_rows) { "" }

  zig = true
  row = 0
  # iterate through character of s and place in appropriate row
  s.chars.each do |char|
    zigzag[row] << char
    # top of a zag, switch to zig
    if !zig && row == 0
      zig = true
    # bottom of a zig, switch to zag
    elsif zig && row == num_rows - 1
      zig = false
    end
    zig ? row += 1 : row -= 1
  end

  zigzag.join
end
