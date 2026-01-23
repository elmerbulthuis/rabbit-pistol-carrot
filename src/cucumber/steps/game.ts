import assert from "node:assert";
import * as games from "../../games.js";
import { TwoPlayerGame } from "../../games.js";
import * as extensions from "../extensions.js";
import { Given, Then, When } from "../world.js";

Given("two people are playing the game", function () {
  const game = new TwoPlayerGame();

  extensions.setTwoPlayerGame(this, game);
});

Given(
  "{word} will play {word}",
  function (playerName: string, playerChoice: games.GameChoice) {
    extensions.setPlayerChoice(this, playerName, playerChoice);
  },
);

When("a round is played", function () {
  const game = extensions.getTwoPlayerGame(this);
  const choices = extensions.getPlayerChoices(this);

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
      extensions.setPlayerResult(this, firstName, "win");
      extensions.setPlayerResult(this, secondName, "lose");
      break;
    case "secondWins":
      extensions.setPlayerResult(this, firstName, "lose");
      extensions.setPlayerResult(this, secondName, "win");
      break;
    case "tie":
      extensions.setPlayerResult(this, firstName, "draw");
      extensions.setPlayerResult(this, secondName, "draw");
      break;
  }
});

Then("{word} should lose", function (playerName: string) {
  const playerResult = extensions.getPlayerResult(this, playerName);
  assert.equal(playerResult, "lose");
});

Then("{word} should win", function (playerName: string) {
  const playerResult = extensions.getPlayerResult(this, playerName);
  assert.equal(playerResult, "win");
});

Then("the game should be a draw", function () {
  const playerResults = extensions.getPlayerResults(this);
  assert(playerResults.length > 0);
  assert(playerResults.every(([, result]) => result === "draw"));
});
