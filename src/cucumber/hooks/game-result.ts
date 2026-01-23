import { World } from "../world.js";

export type PlayerResult = "win" | "lose" | "draw";

const storage = new WeakMap<World, Map<string, PlayerResult>>();

export function setPlayerResult(
  playerName: string,
  playerResult: PlayerResult,
) {
  const world = World.current;
  if (!storage.has(world)) {
    storage.set(world, new Map());
  }
  const playerResults = storage.get(world)!;
  playerResults.set(playerName, playerResult);
}

export function getPlayerResult(playerName: string) {
  const world = World.current;
  return storage.get(world)?.get(playerName);
}

export function getPlayerResults() {
  const world = World.current;
  return [...(storage.get(world) ?? [])];
}
