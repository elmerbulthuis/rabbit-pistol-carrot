import assert from "node:assert";
import test from "node:test";
import { TwoPlayerGame } from "./two-player.js";

test(`${TwoPlayerGame.name} ${TwoPlayerGame.prototype.playRound.name}`, () => {
  // arrange
  const game = new TwoPlayerGame();

  // act
  game.playRound("rabbit", "carrot");
  const result = game.getResult();

  // assert
  assert.equal(result, "firstWins");
});

test(`${TwoPlayerGame.name} ${TwoPlayerGame.prototype.playRound.name} tie`, () => {
  // arrange
  const game = new TwoPlayerGame();

  // act
  game.playRound("carrot", "carrot");
  const result = game.getResult();

  // assert
  assert.equal(result, "tie");
});

test(`${TwoPlayerGame.name} ${TwoPlayerGame.prototype.reset.name}`, () => {
  // arrange
  const game = new TwoPlayerGame();
  game.playRound("rabbit", "carrot");

  // act
  game.reset();
  const result = game.getResult();

  // assert
  assert.equal(result, "tie");
});
