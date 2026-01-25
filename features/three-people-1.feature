Feature: Carrot Pistol Rabbit rules with three people.
When playing with three people, then everyone should play at least once to each other player. The player with the most points wins. If there is a tie with three players then we do another round where every player plays against each other player until we have a winner. If there are 2 players with the most wins then these two compete for the win head to head. A win will give you 2 points, a loss 0 points and a draw 1 point each.

  Background:
    Given David, John and Khalil play the game

  Scenario Outline: Khalil wins
    And David plays <David 1>
    And John plays <John 1>
    And John plays <John 2>
    And Khalil plays <Khalil 2>
    And Khalil plays <Khalil 3>
    And David plays <David 3>
    Then Khalil should win
    And John should lose
    And David should lose

    Examples:
      | David 1 | John 1 | John 2 | Khalil 2 | Khalil 3 | David 3 |
      | rabbit  | rabbit | rabbit | pistol   | carrot   | pistol  |
