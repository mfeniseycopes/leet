# @param {Integer} x
# @return {Integer}
def reverse(x)

    return 0 if x > 2147483647 || x < -2147483648

    # lets do this only with number manipulation
    reversed = 0
    if x < 0
      is_neg = true
      x *= -1
    else
      is_neg = false
    end

    tens = 10
    while x > 0

      digit = x % tens
      x = x / tens

      reversed = (reversed * 10) + digit
    end
    # overflow condition
    return 0 if reversed > 2147483647
    # swap back to positive
    reversed *= -1 if is_neg
    reversed
end
