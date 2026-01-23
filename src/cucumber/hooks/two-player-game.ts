import * as games from "../../games.js";
import * as utilities from "../../utilities.js";
import { World } from "../world.js";

const storage = new WeakMap<World, games.TwoPlayerGame>();

export function setTwoPlayerGame(game: games.TwoPlayerGame) {
  const world = World.current;
  storage.set(world, game);
}

export function getTwoPlayerGame() {
  const world = World.current;
  const result = storage.get(world);
  utilities.assertDefined(result);
  return result;
}
