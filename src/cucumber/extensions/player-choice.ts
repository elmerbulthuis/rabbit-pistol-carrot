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
    map = new Map();
    storage.set(world, map);
  }
  map.set(playerName, choice);
}

export function getPlayerChoices(world: World) {
  return [...(storage.get(world) ?? [])];
}
