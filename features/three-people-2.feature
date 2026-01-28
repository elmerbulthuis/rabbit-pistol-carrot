Feature: Carrot Pistol Rabbit rules with three people.

  Background:
    Given Jack, Ariël and Jasmine play the game

  @skip
  Scenario Outline: Jasmine wins in two rounds
    When Jack picks <Jack 1>
    And Ariël picks <Ariël 1>
    And Jasmine picks <Jasmine 1>
    And Jack picks <Jack 2>
    And Ariël picks <Ariël 2>
    And Jasmine picks <Jasmine 2>
    Then Jasmine should win
    And Jack should lose
    And Ariël should lose

    Examples:
      | Jack 1 | Ariël 1 | Jasmine 1 | Jack 2  | Ariël 2 | Jasmine 2 |
      | carrot | rabbit  | rabbit    | nothing | rabbit  | pistol    |

  @skip
  Scenario Outline: Ariël wins in three rounds
    When Jack picks <Jack 1>
    And Ariël picks <Ariël 1>
    And Jasmine picks <Jasmine 1>
    And Jack picks <Jack 2>
    And Ariël picks <Ariël 2>
    And Jasmine picks <Jasmine 2>
    And Jack picks <Jack 3>
    And Ariël picks <Ariël 3>
    And Jasmine picks <Jasmine 3>
    Then Ariël should win
    And Jack should lose
    And Jasmine should lose

    Examples:
      | Jack 1 | Ariël 1 | Jasmine 1 | Jack 2 | Ariël 2 | Jasmine 2 | Jack 3  | Ariël 3 | Jasmine 3 |
      | carrot | carrot  | rabbit    | carrot | rabbit  | nothing   | nothing | pistol  | rabbit    |
