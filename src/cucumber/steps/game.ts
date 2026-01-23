import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert";
import * as games from "../../games.js";
import { TwoPlayerGame } from "../../games.js";
import * as hooks from "../hooks.js";

Given("two people are playing the game", () => {
  const game = new TwoPlayerGame();
  hooks.setTwoPlayerGame(game);
});

Given(
  "{word} will play {word}",
  (playerName: string, playerChoice: games.GameChoice) => {
    hooks.setPlayerChoice(playerName, playerChoice);
  },
);

When("a round is played", () => {
  const game = hooks.getTwoPlayerGame();
  const choices = hooks.getPlayerChoices();

  assert.equal(choices.length, 2);

  const [firstChoicePair, secondChoicePair] = choices;
  assert(firstChoicePair != null);
  assert(secondChoicePair != null);

  const [_firstName, firstChoice] = firstChoicePair;
  const [_secondName, secondChoice] = secondChoicePair;

  game.playRound(firstChoice, secondChoice);
});

Then("{word} should win", (playerName: string) => {
  const game = hooks.getTwoPlayerGame();
  const choices = hooks.getPlayerChoices();

  assert.equal(choices.length, 2);

  const [firstChoicePair, secondChoicePair] = choices;
  assert(firstChoicePair != null);
  assert(secondChoicePair != null);

  const [firstName, _firstChoice] = firstChoicePair;
  const [secondName, _secondChoice] = secondChoicePair;
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
  const choices = hooks.getPlayerChoices();

  assert.equal(choices.length, 2);

  const [firstChoicePair, secondChoicePair] = choices;
  assert(firstChoicePair != null);
  assert(secondChoicePair != null);

  const [firstName, _firstChoice] = firstChoicePair;
  const [secondName, _secondChoice] = secondChoicePair;
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
