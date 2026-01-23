import { TwoPlayerGame } from "../../games.js";
import * as extensions from "../extensions.js";
import { Given } from "../world.js";

Given("two people are playing the game", function (playerCount: number) {
  const game = new TwoPlayerGame();

  extensions.setTwoPlayerGame(this, game);
});
