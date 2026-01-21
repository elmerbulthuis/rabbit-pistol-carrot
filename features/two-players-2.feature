Feature: Carrot Pistol Rabbit
  A two-player game with the same rules as Rock Paper Scissors
  Rabbit beats Carrot
  Carrot beats Pistol
  Pistol beats Rabbit

  Background:
    Given two people are playing the game

  Scenario: Rabbit beats Carrot
    Given player 1 will play Rabbit
    And player 2 will play Carrot
    When a round is played
    Then player 1 should win
    And player 2 should lose

  Scenario: Carrot beats Pistol
    Given player 1 will play Carrot
    And player 2 will play Pistol
    When a round is played
    Then player 1 should win
    And player 2 should lose

  Scenario: Pistol beats Rabbit
    Given player 1 will play Pistol
    And player 2 will play Rabbit
    When a round is played
    Then player 1 should win
    And player 2 should lose

  Scenario: Draw with both playing Rabbit
    Given player 1 will play Rabbit
    And player 2 will play Rabbit
    When a round is played
    Then the game should be a draw

  Scenario: Draw with both playing Carrot
    Given player 1 will play Carrot
    And player 2 will play Carrot
    When a round is played
    Then the game should be a draw

  Scenario: Draw with both playing Pistol
    Given player 1 will play Pistol
    And player 2 will play Pistol
    When a round is played
    Then the game should be a draw
