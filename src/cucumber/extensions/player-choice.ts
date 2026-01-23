import * as games from "../../games.js";
import { World } from "../world.js";

const storage = new WeakMap<World, Map<string, games.GameChoice>>();

export function setPlayerChoice(
  world: World,
  playerName: string,
  choice: games.GameChoice,
) {
  let map = storage.get(world);
  if (map == null) {
    map = new Map<string, games.GameChoice>();
    storage.set(world, map);
  }
  map.set(playerName, choice);
}

export function getPlayerChoice(world: World, playerName: string) {
  return storage.get(world)?.get(playerName);
}
