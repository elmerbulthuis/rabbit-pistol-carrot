import assert from "node:assert";
import * as games from "../../games.js";
import { TwoPlayerGame } from "../../games.js";
import * as hooks from "../hooks.js";
import { Given, Then, When } from "../world.js";

Given("two people are playing the game", function () {
  const game = new TwoPlayerGame();

  hooks.setTwoPlayerGame(game);
});

Given(
  "{word} will play {word}",
  function (playerName: string, playerChoice: games.GameChoice) {
    hooks.setPlayerChoice(playerName, playerChoice);
  },
);

When("a round is played", function () {
  const game = hooks.getTwoPlayerGame();
  const choices = hooks.getPlayerChoices();

  assert(game != null);
  assert.equal(choices.length, 2);

  const [firstChoicePair, secondChoicePair] = choices;
  assert(firstChoicePair != null);
  assert(secondChoicePair != null);

  const [firstName, firstChoice] = firstChoicePair;
  const [secondName, secondChoice] = secondChoicePair;

  const result = game.play(firstChoice, secondChoice);

  switch (result) {
    case "firstWins":
      hooks.setPlayerResult(firstName, "win");
      hooks.setPlayerResult(secondName, "lose");
      break;
    case "secondWins":
      hooks.setPlayerResult(firstName, "lose");
      hooks.setPlayerResult(secondName, "win");
      break;
    case "tie":
      hooks.setPlayerResult(firstName, "draw");
      hooks.setPlayerResult(secondName, "draw");
      break;
  }
});

Then("{word} should lose", function (playerName: string) {
  const playerResult = hooks.getPlayerResult(playerName);
  assert.equal(playerResult, "lose");
});

Then("{word} should win", function (playerName: string) {
  const playerResult = hooks.getPlayerResult(playerName);
  assert.equal(playerResult, "win");
});

Then("the game should be a draw", function () {
  const playerResults = hooks.getPlayerResults();
  assert(playerResults.length > 0);
  assert(playerResults.every(([, result]) => result === "draw"));
});
