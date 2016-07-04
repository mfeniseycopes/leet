# @param {String} s
# @return {Integer}

require 'byebug'

def length_of_longest_substring(s)
  return 0 if s.length == 0
  # keep track of current chars and their indices
  current_substring_chars = Hash.new { |h, k| h[k] = [] }
  # longest substring seen so far
  max = 0
  # maintain position and head, tail of indices
  idx = 0
  head_idx = 0
  tail_idx = 0

  while idx < s.length
    char = s[idx]

    # character within current substring
    if current_substring_chars.has_key?(char) &&
       current_substring_chars[char].last >= head_idx

      # calc max
      max = new_max(max, head_idx, tail_idx)

      # set new head_index one after last occurrence of char
      head_idx = current_substring_chars[char].last + 1

    end
    # add index to hash
    current_substring_chars[char] << idx

    # increment current idx and tail
    idx += 1
    tail_idx += 1
  end

  new_max(max, head_idx, tail_idx)
end

# helper: calculate max
def new_max(old_max, head_idx, tail_idx)
  current_max = (tail_idx - head_idx)
  current_max > old_max ? current_max : old_max
end

p length_of_longest_substring("abcabcbb")
