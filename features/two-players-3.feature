Feature: Carrot Pistol Rabbit
  A two-player game with the same rules as Rock Paper Scissors
  Rabbit beats Carrot
  Carrot beats Pistol
  Pistol beats Rabbit

  Background:
    Given two people are playing the game

  Scenario Outline: Player 1 wins
    Given Alice will play <win choice>
    And Bob will play <lose choice>
    When a round is played
    Then Alice should win
    And Bob should lose

    Examples:
      | win choice | lose choice |
      | rabbit     | carrot      |
      | carrot     | pistol      |
      | pistol     | rabbit      |

  Scenario Outline: Draw
    Given Alice will play <draw choice>
    And Bob will play <draw choice>
    When a round is played
    Then the game should be a draw

    Examples:
      | draw choice |
      | rabbit      |
      | carrot      |
      | pistol      |
