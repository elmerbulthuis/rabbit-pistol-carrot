Feature: Carrot Pistol Rabbit rules with two players

  Background:
    Given Alice and Bob play the game

  Scenario Outline: Alice wins
    When Alice plays <Alice choice>
    And Bob plays <Bob choice>
    Then Alice should win
    And Bob should lose

    Examples:
      | Alice choice | Bob choice |
      | rabbit       | carrot     |
      | carrot       | pistol     |
      | pistol       | rabbit     |

  Scenario Outline: Draw
    When Alice plays <Alice choice>
    And Bob plays <Bob choice>
    Then the game should be a draw

    Examples:
      | Alice choice | Bob choice |
      | rabbit       | rabbit     |
      | carrot       | carrot     |
      | pistol       | pistol     |
