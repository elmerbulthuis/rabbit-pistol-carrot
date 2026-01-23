import * as games from "../../games.js";
import { World } from "../world.js";

const storage = new WeakMap<World, games.TwoPlayerGame>();

export function setTwoPlayerGame(world: World, game: games.TwoPlayerGame) {
  storage.set(world, game);
}

export function getTwoPlayerGame(world: World) {
  return storage.get(world);
}
