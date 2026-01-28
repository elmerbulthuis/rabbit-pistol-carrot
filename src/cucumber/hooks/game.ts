import * as games from "../../games.js";
import * as utilities from "../../utilities.js";
import { World } from "../world.js";

const storage = new WeakMap<
  World,
  games.TwoPlayerGame | games.ThreePlayerGame
>();

export function setGame(game: games.TwoPlayerGame | games.ThreePlayerGame) {
  const world = World.current;
  storage.set(world, game);
}

export function getGame() {
  const world = World.current;
  const result = storage.get(world);
  utilities.assertDefined(result);
  return result;
}
