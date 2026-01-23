import * as games from "../../games.js";
import { World } from "../world.js";

const storage = new WeakMap<World, Map<string, games.GameChoice>>();

export function setPlayerChoice(playerName: string, choice: games.GameChoice) {
  const world = World.current;
  let map = storage.get(world);
  if (map == null) {
    map = new Map();
    storage.set(world, map);
  }
  map.set(playerName, choice);
}

export function getPlayerChoices() {
  const world = World.current;
  return [...(storage.get(world) ?? [])];
}
