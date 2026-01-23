import assert from "node:assert";
import test from "node:test";
import { TwoPlayerGame } from "./two-player.js";

test(`${TwoPlayerGame.name} ${TwoPlayerGame.prototype.reset.name}`, () => {
  const game = new TwoPlayerGame();

  game.playRound("rabbit", "carrot");
  game.reset();

  const result = game.getResult();
  assert.equal(result, "tie");
});
