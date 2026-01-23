import { World } from "../world.js";

export type PlayerResult = "win" | "lose" | "draw";

const storage = new WeakMap<World, Map<string, PlayerResult>>();

export function setPlayerResult(
  world: World,
  playerName: string,
  playerResult: PlayerResult,
) {
  if (!storage.has(world)) {
    storage.set(world, new Map());
  }
  const playerResults = storage.get(world)!;
  playerResults.set(playerName, playerResult);
}

export function getPlayerResult(world: World, playerName: string) {
  return storage.get(world)?.get(playerName);
}
