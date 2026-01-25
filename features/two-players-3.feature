Feature: Carrot Pistol Rabbit rules with two players

  Background:
    Given Alice and Bob play the game

  Scenario Outline: Alice wins
    When Alice plays <Alice>
    And Bob plays <Bob>
    Then Alice should win
    And Bob should lose

    Examples:
      | Alice  | Bob    |
      | rabbit | carrot |
      | carrot | pistol |
      | pistol | rabbit |

  Scenario Outline: Draw
    When Alice plays <Alice>
    And Bob plays <Bob>
    Then the game should be a draw

    Examples:
      | Alice  | Bob    |
      | rabbit | rabbit |
      | carrot | carrot |
      | pistol | pistol |
