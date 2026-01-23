Feature: Carrot Pistol Rabbit rules with two players

  Background:
    Given two people are playing the game

  Scenario Outline: Alice wins
    Given Alice will play <Alice choice>
    And Bob will play <Bob choice>
    When a round is played
    Then Alice should win
    And Bob should lose

    Examples:
      | Alice choice | Bob choice |
      | rabbit       | carrot     |
      | carrot       | pistol     |
      | pistol       | rabbit     |

  Scenario Outline: Draw
    Given Alice will play <Alice choice>
    And Bob will play <Bob choice>
    When a round is played
    Then the game should be a draw

    Examples:
      | Alice choice | Bob choice |
      | rabbit       | rabbit     |
      | carrot       | carrot     |
      | pistol       | pistol     |
