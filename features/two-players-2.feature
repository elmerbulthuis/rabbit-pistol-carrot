Feature: Carrot Pistol Rabbit rules with two players

  Background:
    Given Alice and Bob play the game

  Scenario: Rabbit beats Carrot
    When Alice picks "rabbit"
    And Bob picks "carrot"
    Then Alice should win
    And Bob should lose

  Scenario: Carrot beats Pistol
    When Alice picks "carrot"
    And Bob picks "pistol"
    Then Alice should win
    And Bob should lose

  Scenario: Pistol beats Rabbit
    When Alice picks "pistol"
    And Bob picks "rabbit"
    Then Alice should win
    And Bob should lose

  Scenario: Draw with both playing Rabbit
    When Alice picks "rabbit"
    And Bob picks "rabbit"
    Then the game should be a draw

  Scenario: Draw with both playing Carrot
    When Alice picks "carrot"
    And Bob picks "carrot"
    Then the game should be a draw

  Scenario: Draw with both playing Pistol
    When Alice picks "pistol"
    And Bob picks "pistol"
    Then the game should be a draw
