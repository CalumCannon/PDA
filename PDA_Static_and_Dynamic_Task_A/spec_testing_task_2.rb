require('minitest/autorun')
require('minitest/rg')
require_relative('testing_task_2.rb')
require('pry-byebug')

class Test < MiniTest::Test

  def setup()
    @card1 = Card.new('clubs', 1)
    @card2 = Card.new('spades', 2)
    @cards = [@card1, @card2]
    # @cardgame = CardGame.new(cards)
  end

def test_card_suit()
  assert_equal('clubs', @card1.suit)
end

def test_card_value()
  assert_equal(1, @card1.value)
end

def test_check_for_ace()
  assert_equal(true, CardGame.check_for_ace(@card1))
end

def test_check_for_non_ace()
  assert_equal(false, CardGame.check_for_ace(@card2))
end

def test_highest_card()
  assert_equal(@card2, CardGame.highest_card(@card1, @card2))
end

def test_cards_total()
  assert_equal("You have a total of 3", CardGame.cards_total(@cards))
end

end