def is_palindrome(x)

  return false if (x < 0) || (x != 0) && (x % 10 == 0)

  # stores the right half digits in reverse order
  half = 0

  while x > half

    # add digit to left of half
    half = (half * 10) + (x % 10)

    # remove digit from x
    x /= 10

  end

  # return true if x (left half) is equal to right half
  # accounts for odd number of digits
  x == half || x == (half / 10)

end
