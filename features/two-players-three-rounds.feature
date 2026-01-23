Feature: Carrot Pistol Rabbit rules with two players playing three rounds

  Background:
    Given George and Harry play the game

  Scenario Outline: George wins
    When George plays <George choice 1>
    And Harry plays <Harry choice 1>
    And George plays <George choice 2>
    And Harry plays <Harry choice 2>
    And George plays <George choice 3>
    And Harry plays <Harry choice 3>
    Then George should win
    And Harry should lose

    Examples:
      | George choice 1 | Harry choice 1 | George choice 2 | Harry choice 2 | George choice 3 | Harry choice 3 |
      | rabbit          | carrot         | rabbit          | carrot         | rabbit          | carrot         |
      | carrot          | carrot         | carrot          | carrot         | rabbit          | carrot         |
      | pistol          | rabbit         | rabbit          | pistol         | pistol          | rabbit         |

  Scenario Outline: Harry wins
    When George plays <George choice 1>
    And Harry plays <Harry choice 1>
    And George plays <George choice 2>
    And Harry plays <Harry choice 2>
    And George plays <George choice 3>
    And Harry plays <Harry choice 3>
    Then George should lose
    And Harry should win

    Examples:
      | George choice 1 | Harry choice 1 | George choice 2 | Harry choice 2 | George choice 3 | Harry choice 3 |
      | rabbit          | rabbit         | rabbit          | pistol         | rabbit          | pistol         |
      | carrot          | rabbit         | pistol          | pistol         | rabbit          | rabbit         |
      | rabbit          | rabbit         | carrot          | rabbit         | carrot          | carrot         |

  Scenario Outline: Draw
    When George plays <George choice 1>
    And Harry plays <Harry choice 1>
    And George plays <George choice 2>
    And Harry plays <Harry choice 2>
    And George plays <George choice 3>
    And Harry plays <Harry choice 3>
    Then the game should be a draw

    Examples:
      | George choice 1 | Harry choice 1 | George choice 2 | Harry choice 2 | George choice 3 | Harry choice 3 |
      | rabbit          | rabbit         | rabbit          | rabbit         | rabbit          | rabbit         |
      | carrot          | rabbit         | rabbit          | carrot         | rabbit          | rabbit         |
      | carrot          | carrot         | carrot          | pistol         | carrot          | rabbit         |
