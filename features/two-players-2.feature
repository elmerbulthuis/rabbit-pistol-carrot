Feature: Carrot Pistol Rabbit rules with two players

  Background:
    Given two people are playing the game

  Scenario: Rabbit beats Carrot
    Given Alice will play rabbit
    And Bob will play carrot
    When a round is played
    Then Alice should win
    And Bob should lose

  Scenario: Carrot beats Pistol
    Given Alice will play carrot
    And Bob will play pistol
    When a round is played
    Then Alice should win
    And Bob should lose

  Scenario: Pistol beats Rabbit
    Given Alice will play pistol
    And Bob will play rabbit
    When a round is played
    Then Alice should win
    And Bob should lose

  Scenario: Draw with both playing Rabbit
    Given Alice will play rabbit
    And Bob will play rabbit
    When a round is played
    Then the game should be a draw

  Scenario: Draw with both playing Carrot
    Given Alice will play carrot
    And Bob will play carrot
    When a round is played
    Then the game should be a draw

  Scenario: Draw with both playing Pistol
    Given Alice will play pistol
    And Bob will play pistol
    When a round is played
    Then the game should be a draw
