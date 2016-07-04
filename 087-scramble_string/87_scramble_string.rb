require 'byebug'

def is_scramble(str1, str2)

  hash = Hash.new(0)
  str1.each_char { |char| hash[char] += 1 }
  str2.each_char { |char| hash[char] -= 1 }
  return false unless hash.values.all? { |count| count == 0 }
  # return false unless same_char_counts(str1, str2)
  return true if str1 == str2

  (1...str2.length).each do |i|
    left1 = str1[0...i]
    right1 = str1[i..-1]

    left2 = str2[0...i]
    right2 = str2[i..-1]

    return true if is_scramble(left1, left2) && is_scramble(right1, right2)

    right2 = str2[0...str2.length - i]
    left2 = str2[str2.length - i..-1]
    return true if is_scramble(left1, left2) && is_scramble(right1, right2)
  end

  false
end

puts is_scramble("great", "rgtae")
