Feature: Carrot Pistol Rabbit
  A two-player game with the same rules as Rock Paper Scissors
  Rabbit beats Carrot
  Carrot beats Pistol
  Pistol beats Rabbit

  Scenario: Rabbit beats Carrot
    Given two people are playing the game
    And player 1 will play Rabbit
    And player 2 will play Carrot
    When a round is played
    Then player 1 should win
    And player 2 should lose

  Scenario: Carrot beats Pistol
    Given two people are playing the game
    And player 1 will play Carrot
    And player 2 will play Pistol
    When a round is played
    Then player 1 should win
    And player 2 should lose

  Scenario: Pistol beats Rabbit
    Given two people are playing the game
    And player 1 will play Pistol
    And player 2 will play Rabbit
    When a round is played
    Then player 1 should win
    And player 2 should lose

  Scenario: Draw with both playing Rabbit
    Given two people are playing the game
    And player 1 will play Rabbit
    And player 2 will play Rabbit
    When a round is played
    Then the game should be a draw

  Scenario: Draw with both playing Carrot
    Given two people are playing the game
    And player 1 will play Carrot
    And player 2 will play Carrot
    When a round is played
    Then the game should be a draw

  Scenario: Draw with both playing Pistol
    Given two people are playing the game
    And player 1 will play Pistol
    And player 2 will play Pistol
    When a round is played
    Then the game should be a draw
