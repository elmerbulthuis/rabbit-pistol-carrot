Feature: Carrot Pistol Rabbit rules with two players playing two rounds

  Background:
    Given George and Harry play the game

  Scenario Outline: George wins
    When George picks <George 1>
    And Harry picks <Harry 1>
    And George picks <George 2>
    And Harry picks <Harry 2>
    Then George should win
    And Harry should lose

    Examples:
      | George 1 | Harry 1 | George 2 | Harry 2 |
      | rabbit   | carrot  | rabbit   | carrot  |
      | carrot   | carrot  | pistol   | rabbit  |
      | pistol   | rabbit  | carrot   | pistol  |

  Scenario Outline: Harry wins
    When George picks <George 1>
    And Harry picks <Harry 1>
    And George picks <George 2>
    And Harry picks <Harry 2>
    Then George should lose
    And Harry should win

    Examples:
      | George 1 | Harry 1 | George 2 | Harry 2 |
      | rabbit   | rabbit  | rabbit   | pistol  |
      | pistol   | carrot  | pistol   | carrot  |
      | pistol   | pistol  | carrot   | rabbit  |

  Scenario Outline: Draw
    When George picks <George 1>
    And Harry picks <Harry 1>
    And George picks <George 2>
    And Harry picks <Harry 2>
    Then the game should be a draw

    Examples:
      | George 1 | Harry 1 | George 2 | Harry 2 |
      | rabbit   | rabbit  | rabbit   | rabbit  |
      | carrot   | rabbit  | pistol   | rabbit  |
      | pistol   | carrot  | carrot   | pistol  |
