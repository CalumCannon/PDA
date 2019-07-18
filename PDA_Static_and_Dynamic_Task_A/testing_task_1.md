### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  # missing an initialize() function? if not we need
  # to declare the methods as self.

  # should be lower case A, and space words with _
  # should be self. if we don't initialize the class
  # should be == to check value
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  # should be def
  # should be self. if we don't initialize the class
  # no name property in card, should be return card1
  # else statement should return card2
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
# this end should be at the bottom of this file
end

# missing a space at the end of the return string, before + total
# total needs to be converted to string, or interpolated
# total needs to be set to 0 initially
# return needs to happen outside the loop
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
