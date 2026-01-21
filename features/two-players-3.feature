Feature: Carrot Pistol Rabbit
  A two-player game with the same rules as Rock Paper Scissors
  Rabbit beats Carrot
  Carrot beats Pistol
  Pistol beats Rabbit

  Background:
    Given two people are playing the game

  Scenario Outline: Player 1 wins
    Given player 1 will play <win choice>
    And player 2 will play <lose choice>
    When a round is played
    Then player 1 should win
    And player 2 should lose

    Examples:
      | win choice | lose choice |
      | Rabbit     | Carrot      |
      | Carrot     | Pistol      |
      | Pistol     | Rabbit      |

  Scenario Outline: Draw
    Given player 1 will play <draw choice>
    And player 2 will play <draw choice>
    When a round is played
    Then the game should be a draw

    Examples:
      | draw choice |
      | Rabbit      |
      | Carrot      |
      | Pistol      |
