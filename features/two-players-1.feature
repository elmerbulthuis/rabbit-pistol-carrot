Feature: Carrot Pistol Rabbit rules with two players

  Scenario: Rabbit beats Carrot
    Given Alice and Bob play the game
    When Alice plays rabbit
    And Bob plays carrot
    Then Alice should win
    And Bob should lose

  Scenario: Carrot beats Pistol
    Given Alice and Bob play the game
    When Alice plays carrot
    And Bob plays pistol
    Then Alice should win
    And Bob should lose

  Scenario: Pistol beats Rabbit
    Given Alice and Bob play the game
    When Alice plays pistol
    And Bob plays rabbit
    Then Alice should win
    And Bob should lose

  Scenario: Draw with both playing Rabbit
    Given Alice and Bob play the game
    When Alice plays rabbit
    And Bob plays rabbit
    Then the game should be a draw

  Scenario: Draw with both playing Carrot
    Given Alice and Bob play the game
    When Alice plays carrot
    And Bob plays carrot
    Then the game should be a draw

  Scenario: Draw with both playing Pistol
    Given Alice and Bob play the game
    When Alice plays pistol
    And Bob plays pistol
    Then the game should be a draw
