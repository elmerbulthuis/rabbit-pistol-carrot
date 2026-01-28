Feature: Carrot Pistol Rabbit rules with two players

  Scenario: Rabbit beats Carrot
    Given Alice and Bob play the game
    When Alice picks rabbit
    And Bob picks carrot
    Then Alice should win
    And Bob should lose

  Scenario: Carrot beats Pistol
    Given Alice and Bob play the game
    When Alice picks carrot
    And Bob picks pistol
    Then Alice should win
    And Bob should lose

  Scenario: Pistol beats Rabbit
    Given Alice and Bob play the game
    When Alice picks pistol
    And Bob picks rabbit
    Then Alice should win
    And Bob should lose

  Scenario: Draw with both playing Rabbit
    Given Alice and Bob play the game
    When Alice picks rabbit
    And Bob picks rabbit
    Then the game should be a draw

  Scenario: Draw with both playing Carrot
    Given Alice and Bob play the game
    When Alice picks carrot
    And Bob picks carrot
    Then the game should be a draw

  Scenario: Draw with both playing Pistol
    Given Alice and Bob play the game
    When Alice picks pistol
    And Bob picks pistol
    Then the game should be a draw
