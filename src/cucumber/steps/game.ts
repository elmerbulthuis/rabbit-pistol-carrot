import { TwoPlayerGame } from "../../games.js";
import { Given } from "../world.js";

Given("two people are playing the game", function (playerCount: number) {
  const game = new TwoPlayerGame();
});
