import * as utilities from "../../utilities.js";
import { World } from "../world.js";

const storage = new WeakMap<World, Array<string>>();

export function addPlayer(playerName: string) {
  const world = World.current;
  let names = storage.get(world);
  if (names == null) {
    names = [];
    storage.set(world, names);
  }
  names.push(playerName);
}

export function getTwoPlayerNames() {
  const world = World.current;
  const result = storage.get(world);
  utilities.assertDefined(result);

  const [firstName, secondName] =
    result.length === 2 ? result : [undefined, undefined];
  utilities.assertDefined(firstName);
  utilities.assertDefined(secondName);

  return [firstName, secondName] as const;
}

export function getThreePlayerNames() {
  const world = World.current;
  const result = storage.get(world);
  utilities.assertDefined(result);

  const [firstName, secondName, thirdName] =
    result.length === 3 ? result : [undefined, undefined];
  utilities.assertDefined(firstName);
  utilities.assertDefined(secondName);
  utilities.assertDefined(thirdName);

  return [firstName, secondName, thirdName] as const;
}
