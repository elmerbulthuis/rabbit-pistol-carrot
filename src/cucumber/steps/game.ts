import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert";
import * as games from "../../games.js";
import { TwoPlayerGame } from "../../games.js";
import * as hooks from "../hooks.js";

Given(
  "{word} and {word} play the game",
  (firstName: string, secondName: string) => {
    const game = new TwoPlayerGame();
    hooks.setTwoPlayerGame(game);
    hooks.addPlayer(firstName);
    hooks.addPlayer(secondName);
  },
);

When(
  "{word} plays {word}",
  (playerName: string, playerChoice: games.GameChoice) => {
    const game = hooks.getTwoPlayerGame();
    const [firstName, secondName] = hooks.getTwoPlayerNames();

    hooks.setPlayerChoice(playerName, playerChoice);

    if (hooks.getPlayerChoiceCount() === 2) {
      const firstChoice = hooks.getPlayerChoice(firstName);
      const secondChoice = hooks.getPlayerChoice(secondName);
      hooks.resetPlayerChoice();

      game.playRound(firstChoice, secondChoice);
    }
  },
);

Then("{word} should win", (playerName: string) => {
  const game = hooks.getTwoPlayerGame();
  const [firstName, secondName] = hooks.getTwoPlayerNames();

  const result = game.getResult();

  switch (playerName) {
    case firstName:
      assert.equal(result, "firstWins");
      break;
    case secondName:
      assert.equal(result, "secondWins");
      break;
    default:
      assert.fail(`Player name ${playerName} not found`);
  }
});

Then("{word} should lose", (playerName: string) => {
  const game = hooks.getTwoPlayerGame();
  const [firstName, secondName] = hooks.getTwoPlayerNames();

  const result = game.getResult();

  switch (playerName) {
    case firstName:
      assert.equal(result, "secondWins");
      break;
    case secondName:
      assert.equal(result, "firstWins");
      break;
    default:
      assert.fail(`Player name ${playerName} not found`);
  }
});

Then("the game should be a draw", () => {
  const game = hooks.getTwoPlayerGame();
  assert.equal(game.getResult(), "tie");
});
