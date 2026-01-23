Feature: Carrot Pistol Rabbit rules with two players playing two rounds

  Background:
    Given George and Harry play the game

  Scenario Outline: George wins
    When George plays <George choice 1>
    And Harry plays <Harry choice 1>
    And George plays <George choice 2>
    And Harry plays <Harry choice 2>
    Then George should win
    And Harry should lose

    Examples:
      | George choice 1 | Harry choice 1 | George choice 2 | Harry choice 2 |
      | rabbit          | carrot         | rabbit          | carrot         |
      | carrot          | carrot         | pistol          | rabbit         |
      | pistol          | rabbit         | carrot          | pistol         |

  Scenario Outline: Harry wins
    When George plays <George choice 1>
    And Harry plays <Harry choice 1>
    And George plays <George choice 2>
    And Harry plays <Harry choice 2>
    Then George should lose
    And Harry should win

    Examples:
      | George choice 1 | Harry choice 1 | George choice 2 | Harry choice 2 |
      | rabbit          | rabbit         | rabbit          | pistol         |
      | pistol          | carrot         | pistol          | carrot         |
      | pistol          | pistol         | carrot          | rabbit         |

  Scenario Outline: Draw
    When George plays <George choice 1>
    And Harry plays <Harry choice 1>
    And George plays <George choice 2>
    And Harry plays <Harry choice 2>
    Then the game should be a draw

    Examples:
      | George choice 1 | Harry choice 1 | George choice 2 | Harry choice 2 |
      | rabbit          | rabbit         | rabbit          | rabbit         |
      | carrot          | rabbit         | pistol          | rabbit         |
      | pistol          | carrot         | carrot          | pistol         |
