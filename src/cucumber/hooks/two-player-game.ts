import * as games from "../../games.js";
import { World } from "../world.js";

const storage = new WeakMap<World, games.TwoPlayerGame>();

export function setTwoPlayerGame(game: games.TwoPlayerGame) {
  const world = World.current;
  storage.set(world, game);
}

export function getTwoPlayerGame() {
  const world = World.current;
  return storage.get(world);
}
