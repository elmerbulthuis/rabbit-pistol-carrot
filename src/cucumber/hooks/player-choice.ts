import * as games from "../../games.js";
import * as utilities from "../../utilities.js";
import { World } from "../world.js";

const storage = new WeakMap<World, Map<string, games.GameChoice | null>>();

export function setPlayerChoice(
  playerName: string,
  choice: games.GameChoice | null,
) {
  const world = World.current;
  let map = storage.get(world);
  if (map == null) {
    map = new Map();
    storage.set(world, map);
  }
  map.set(playerName, choice);
}

export function getPlayerChoiceCount() {
  const world = World.current;
  const count = storage.get(world)?.size ?? 0;
  return count;
}

export function getPlayerChoice(playerName: string) {
  const world = World.current;
  const map = storage.get(world);
  utilities.assertDefined(map);
  const choice = map.get(playerName) ?? null;
  return choice;
}

export function resetPlayerChoice() {
  const world = World.current;
  storage.delete(world);
}
